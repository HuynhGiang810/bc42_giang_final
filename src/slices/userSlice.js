import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiLogin } from "../apis/AuthAPI";
import { alertError, alertSuccess } from "../help/sweeAlert2";

// async actions
export const login = createAsyncThunk(
  "user/login",
  async (values, { getState }) => {
    try {
      const data = await apiLogin(values);
      if (data) alertSuccess("Logged in successfully!");
      sessionStorage.setItem("userInfo", JSON.stringify(data.content));
      const { rememberMe } = getState().user;
      if (rememberMe) {
        localStorage.setItem("userInfo", JSON.stringify(data.content));
      }
      return data.content;
    } catch (error) {
      alertError("Failed to log in!");
      throw error;
    }
  }
);

// default state
const initialState = {
  user:
    JSON.parse(sessionStorage.getItem("userInfo")) ||
    JSON.parse(localStorage.getItem("userInfo")) ||
    null,
  isLoading: false,
  error: null,
  rememberMe: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      return { ...state, user: null };
    },
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(login.fulfilled, (state, action) => {
      return { ...state, isLoading: false, user: action.payload };
    });
    builder.addCase(login.rejected, (state, action) => {
      return { ...state, isLoading: false, error: action.error.message };
    });
  },
});

export const { logout, setRememberMe } = userSlice.actions;

export default userSlice.reducer;
