import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../utils/types";
import { getCookie, setCookie } from "../../utils/cookie";
import { RootState } from "../../store/store";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async (
    { email, password }: { email: string; password: string },
    { dispatch }
  ) => {
    try {
      const auth = getAuth();
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      console.log(user);
      if (user) {
        const accessToken = await user.getIdToken();
        const refreshToken = user.refreshToken;
        dispatch(setUser({ email, password, accessToken, refreshToken }));
        setCookie("email", email);
        setCookie("password", password);
        setCookie("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        dispatch(loginSuccess(true));
      }
    } catch (error) {
      dispatch(loginFailure(error as string));
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (
    { email, password }: { email: string; password: string },
    { dispatch }
  ) => {
    try {
      const auth = getAuth();
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      if (user) {
        const accessToken = await user.getIdToken();
        const refreshToken = user.refreshToken;
        dispatch(setUser({ email, password, accessToken, refreshToken }));
        setCookie("email", email);
        setCookie("password", password);
        setCookie("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        dispatch(loginSuccess(true));
      }
    } catch (error) {
      dispatch(loginFailure(error as string));
    }
  }
);

export const initializeAuth = createAsyncThunk(
  "user/initialize",
  async (_, { dispatch }) => {
    try {
      const accessToken = getCookie("accessToken");
      if (accessToken) {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const refreshToken = localStorage.getItem("refreshToken");
            dispatch(
              setUser({
                email: user.email || "",
                accessToken: accessToken,
                refreshToken: refreshToken || "",
                password: "",
              })
            );
            dispatch(setIsAuthenticated(true));
          } else {
            dispatch(setIsAuthenticated(true));
          }
        });
      }
    } catch (err) {
      loginFailure(err as string);
    }
  }
);

export type UserState = {
  user: TUser | null;
  isAuthenticated: boolean;
  success: boolean;
  loading: boolean;
  error: string | null;
};

export const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  success: false,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.success = true;
      state.loading = false;
      state.error = null;
      console.log(state.user);
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    loginSuccess: (state, action: PayloadAction<boolean>) => {
      state.success = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.success = false;
      state.loading = false;
      state.error = action.payload as string;
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      state.success = false;
      localStorage.removeItem("refreshToken");
      document.cookie = "accessToken=;";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error as string;
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error as string;
      });
  },
});

export const {
  setUser,
  setIsAuthenticated,
  loginSuccess,
  loginFailure,
  logout,
} = userSlice.actions;

export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
