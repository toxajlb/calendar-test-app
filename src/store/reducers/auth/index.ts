import { createSlice } from "@reduxjs/toolkit";
import { AuthAction, AuthState } from "./types";

const initialState: AuthState = {
  auth: false
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authReducer(state, action: AuthAction) {

    }
  }

})
