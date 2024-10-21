import { mockAuth, mockUser } from "../../utils/testConstants";
import {
  initialState,
  loginFailure,
  loginSuccess,
  logout,
  setIsAuthenticated,
  setUser,
} from "./userSlice";
import userReducer from "./userSlice";

describe("тестируем userSlice", () => {
  it("проверяем гачальное состояние", () => {
    expect(userReducer(undefined, { type: "unknown" })).toEqual(initialState);
  }),
    describe("тестируем экшн setUser", () => {
      it("проверяем установку пользователя", () => {
        const testAuth = mockAuth;
        const action = {
          type: setUser.type,
          payload: mockUser,
        };
        const newState = userReducer(initialState, action);

        expect(newState).toEqual({
          ...initialState,
          user: testAuth.user,
          isAuthenticated: testAuth.isAuthenticated,
          success: testAuth.success,
          loading: testAuth.loading,
          error: testAuth.error,
        });
      });
    });
  describe("тестируем экшн setIsAuthenticated", () => {
    it("проверяем изменение состояния isAuthenticated", () => {
      const action = {
        type: setIsAuthenticated.type,
        payload: true,
      };
      const newState = userReducer(mockAuth, action);

      expect(newState).toEqual({
        ...mockAuth,
        isAuthenticated: true,
      });
    });
  });
  describe("тестируем экшн loginSuccess", () => {
    it("проверяем успешность входа", () => {
      const action = {
        type: loginSuccess.type,
        payload: true,
      };

      const newState = userReducer(mockAuth, action);
      expect(newState).toEqual({
        ...mockAuth,
        success: true,
      });
    });
  });
  describe("тестируем экшн loginFailure", () => {
    it("проверяем неуспегность входа", () => {
      const action = {
        type: loginFailure.type,
        payload: "Ошибка входа",
      };

      const newState = userReducer(mockAuth, action);
      expect(newState).toEqual({
        ...mockAuth,
        success: false,
        error: "Ошибка входа",
      });
    });
  });

  describe("тестируем экшн logout", () => {
    it("проверяем выход из аккаунта", () => {
      const action = {
        type: logout.type,
      };

      const newState = userReducer(mockAuth, action);
      expect(newState).toEqual(initialState);
    });
  });
});
