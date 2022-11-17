import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface loginSlice {
  userAuth: {
    status: boolean;
  };
}

const initialState: loginSlice = {
  userAuth: {
    status: false,
  },
};

export const fetchLoginStatus = createAsyncThunk("getLoginStatus", async () => {
  const response = axios.get("http://localhost:3000/loggedIn/");
  return (await response).data;
});

export const handleLoginAuth = createAsyncThunk(
  "loginCheck",
  async (value: boolean) => {
    const response = axios.put("http://localhost:3000/loggedIn/", {
      status: value,
    });
    return (await response).data;
  }
);

export const loginSlice = createSlice({
  name: "beforeLogin",
  initialState,
  reducers: {
    setLogout: (state, action) => {
      state.userAuth.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleLoginAuth.fulfilled, (state, action) => {
      console.log(action.payload, "stac");
      state.userAuth.status = action.payload.status;
    });
    builder.addCase(fetchLoginStatus.fulfilled, (state, action) => {
      state.userAuth.status = action.payload.status;
    });
  },
});

export const { setLogout } = loginSlice.actions;

export default loginSlice.reducer;
