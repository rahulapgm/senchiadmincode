import { all } from "redux-saga/effects";

export const allSagas = () => [];

export default function* rootSaga() {
  yield all(allSagas());
}
