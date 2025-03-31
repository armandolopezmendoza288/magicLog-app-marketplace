import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  status: string;
  name: string;
  userId: string;
  userTypeId: string;
}

const initialState: AuthState = {
  status: "checking", //not-authenticated, authenticated or checking
  name: "",
  userId: "",
  userTypeId: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.name = payload.name;
      state.userId = payload.userId;
      state.userTypeId = payload.userTypeId;
    },
    userLogout: (state) => {
      state.status = "not-authenticated";
      state.name = "";
      state.userId = "";
      state.userTypeId = "";
    },
  },
});

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
