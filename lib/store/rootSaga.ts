import { all, fork } from "redux-saga/effects";
import { postsSaga } from "./sagas/postsSaga";
import { authSaga } from "./sagas/authSaga";

export function* rootSaga() {
  yield all([fork(postsSaga), fork(authSaga)]);
}
