import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {

  },
});

export type RootState = {

};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

store.subscribe(() => {
  //   const state = store.getState();
  //   localStorage.setItem(LSK_USER_SLICE, JSON.stringify(state.user));
});
