import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import userReducer from '../features/userSlice/userSlice';

export const rootReducer = combineReducers({
  user: userReducer
});

const store = configureStore({
  reducer: rootReducer,
  // Add any middleware or enhancers here
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook

export default store
