import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import authSlice from "../store/slices/authSlice";
import loginReducer from "../pages/login/redux/loginSlice";

const store = configureStore({
  reducer: {
    beforeLogin: authSlice,
    loginSlice: loginReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
