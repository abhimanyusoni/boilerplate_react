import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface User {
  username: string;
  password: string;
  confpassword: string;
  phone: number;
}

export interface UserInsider {
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
  id: number;
}

export interface authSlice {
  value: number;
  users: User[];
  usersPerPage: User[];
  userInsider: UserInsider[];
  totalUser: number;
}

const initialState: authSlice = {
  value: 0,
  users: [],
  usersPerPage: [],
  userInsider: [],
  totalUser: 0,
};

export const fetchUsers = createAsyncThunk("users", async () => {
  const response = await fetch("http://localhost:3000/users");
  return await response.json();
});

export const fetchUsersInsider = createAsyncThunk(
  "insider",
  async ([page, perpage]: any) => {
    const response = await fetch(
      `https://reqres.in/api/users?page=${page}&per_page=${perpage}&delay=1`
    );
    return await response.json();
  }
);

export const fetchUsersWithPage = createAsyncThunk(
  "perpage/users",
  async (page: number) => {
    const response = await fetch("http://localhost:3000/users/" + page);
    return await response.json();
  }
);

export const searchFilter = createAsyncThunk(
  "filter/users",
  async (searchtext: string) => {
    const response = await fetch(
      "http://localhost:3000/users/searchText?=" + searchtext
    );
    return await response.json();
  }
);

export const authSlice = createSlice({
  name: "beforeLogin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(fetchUsersInsider.fulfilled, (state, action) => {
      // console.log(action.payload.data, "action.payload");
      state.userInsider = action.payload.data;
      state.totalUser = action.payload.total;
    });
    builder.addCase(fetchUsersWithPage.fulfilled, (state, action) => {
      state.usersPerPage = [action.payload];
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
