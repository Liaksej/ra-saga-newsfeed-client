import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { SagasActions } from "@/redux/sagas/sagasActions";
import {
  fetchError,
  loading,
  addMoreData,
  allContentLoaded,
  loadingMore,
} from "@/redux/load/loadSlice";
import { newsBunchSchema } from "@/redux/sagas/zodSchema";
import { NewsBunch } from "@/redux/load/loadStateTypes";
import { PayloadAction } from "@reduxjs/toolkit";

export function* fetchData(action?: PayloadAction<string>) {
  while (true) {
    try {
      let response: Response;
      if (action?.payload) {
        yield put(loadingMore());
        const url = new URL("http://localhost:7070/api/news");
        url.searchParams.set("lastSeenId", action.payload);
        response = yield call(fetch, url);
      } else {
        yield put(loading());
        response = yield call(fetch, `http://localhost:7070/api/news`);
      }
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data: NewsBunch[] = yield call([response, response.json]);
      console.log(data);
      const validatedData = newsBunchSchema.safeParse(data);
      if (!validatedData.success) {
        console.log(validatedData.error);
        throw new Error("Missing Fields. Failed to fetch services.");
      }
      if (data.length < 5) {
        yield put(allContentLoaded());
      }
      yield put(addMoreData(data));
      return;
    } catch (error: unknown) {
      console.error(error);
      yield delay(3000);
    }
  }
}

export function* watchLoadData() {
  yield takeLatest(SagasActions.LOAD_FIRST_BUNCH_OF_DATA, fetchData);
  yield takeEvery(SagasActions.LOAD_NEXT_BUNCH_OF_DATA, fetchData);
}
