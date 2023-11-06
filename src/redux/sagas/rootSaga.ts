import { all, fork } from "redux-saga/effects";
import { watchLoadData } from "@/redux/sagas/dataLoadSaga";

export default function* rootSaga() {
  yield all([fork(watchLoadData)]);
}
