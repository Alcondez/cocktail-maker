import { configureStore } from "@reduxjs/toolkit";
import appReducer from './appReducer';

const reducer = {
    app: appReducer
}

const store = configureStore({ reducer });
export type RootState = ReturnType<typeof store.getState>

export default store;