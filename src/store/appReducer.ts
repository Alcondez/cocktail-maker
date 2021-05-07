import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import drinksService from "../services/drinksService"

export interface Drink {
    id: string;
    imageUrl: string;
    name: string;
}

interface AppState {
    fetching: boolean;
    drinks: Drink[]
}

export const queryDrinks = createAsyncThunk(
    'app/searchDrinks',
    async (query: string, thunkAPI) => {
      const response = await drinksService.searchDrinks(query)
      return response;
    }
  )

const initialState: AppState = {
    fetching: false,
    drinks: []
}

const appReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(queryDrinks.pending, (state, action) => {
        state.fetching = true;
      })
      .addCase(queryDrinks.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.fetching = false;
      })
      .addCase(queryDrinks.rejected, (state, action) => {
        state.fetching = false;
      })
  })

  export default appReducer;