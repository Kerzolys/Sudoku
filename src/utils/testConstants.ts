import { UserState } from "../features/userSlice/userSlice";
import { TUser } from "./types";

export const mockUser: TUser = {
  email: 'test@example.com',
  password: 'test123',
  accessToken: '1234567890',
  refreshToken: '9876543210',
}

export const mockAuth: UserState = {
  user: mockUser,
  isAuthenticated: true,
  success: true,
  loading: false,
  error: null,
}