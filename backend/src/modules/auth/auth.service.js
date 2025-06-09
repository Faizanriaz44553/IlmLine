import Auth from "./auth.model.js";
import Admin from "../admin/admin.model.js";
import Teacher from "../teacher/teacher.model.js";
import Student from "../student/student.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const AuthService = {
  register: async (body, currentUserRole) => {
    const { name, email, password, role } = body;

    const allowedRolesMap = {
      superadmin: ['admin', 'teacher', 'student'],
      admin: ['teacher', 'student'],
      teacher: ['student'],
      student: [],
    };

    if (!currentUserRole && role !== 'superadmin') {
      throw new Error('Only superadmin can be manually added initially');
    }

    if (currentUserRole && !allowedRolesMap[currentUserRole]?.includes(role)) {
      throw new Error(`As a ${currentUserRole}, you cannot create role: ${role}`);
    }

    const existingUser = await Auth.findOne({ email });
    if (existingUser) throw new Error('Email already registered');

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await Auth.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    // Save additional data to role-specific model
    switch (role) {
      case 'admin':
        await Admin.create({
          authId: newUser._id,
          instituteId: body.instituteId,
          fullName: body.fullName || name,
          phone: body.phone,
          profileImage: body.profileImage,
        });
        break;

      case 'teacher':
        await Teacher.create({
          authId: newUser._id,
          instituteId: body.instituteId,
          fullName: body.fullName || name,
          subjects: body.subjects || [],
          phone: body.phone,
          profileImage: body.profileImage,
        });
        break;

      case 'student':
        await Student.create({
          authId: newUser._id,
          instituteId: body.instituteId,
          assignedTeacherId: body.assignedTeacherId || null,
          fullName: body.fullName || name,
          rollNo: body.rollNo,
          class: body.class,
          phone: body.phone,
          profileImage: body.profileImage,
        });
        break;
    }

    return {
      message: 'Registration successful',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    };
  },

  login: async ({ email, password }) => {
    const user = await Auth.findOne({ email });
    if (!user) throw new Error('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return {
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  },
};
