import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "@/redux/sagas/rootSaga";
import { loadSlice } from "@/redux/load/loadSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    load: loadSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);
