import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { loginStart, loginSuccess, loginFailure } from "../slices/authSlice";
import { login, toUser } from "@/lib/api";

function getErrorMessage(error: unknown, fallback: string) {
  return error instanceof Error ? error.message : fallback;
}

function* handleLogin(action: PayloadAction<{ username: string; password: string }>) {
  try {
    const response: Awaited<ReturnType<typeof login>> = yield call(
      login,
      action.payload.username,
      action.payload.password
    );
    yield put(loginSuccess(toUser(response)));
  } catch (error: unknown) {
    yield put(loginFailure(getErrorMessage(error, "Failed to log in")));
  }
}

export function* authSaga() {
  yield takeLatest(loginStart.type, handleLogin);
}
