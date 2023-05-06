import { configureStore } from "@reduxjs/toolkit";
import {quanLyNguoiDungReducer} from "./quanLyNguoiDung/slice"
import { quanLyDatVeReducer } from "./quanLyDatVe/slice";
export const store = configureStore({
  reducer:{
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyDatVe: quanLyDatVeReducer,
  }
});