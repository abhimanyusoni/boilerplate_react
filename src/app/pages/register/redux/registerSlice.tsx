import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "registerUser",
  async (user: any) => {
    const response = axios.post("http://localhost:3000/users", user);
    return (await response).data;
  }
);

export const registerSlice = createSlice({
  name: "beforeLoginRegister",
  initialState: {},
  reducers: {},
});

export const {} = registerSlice.actions;

export default registerSlice.reducer;
