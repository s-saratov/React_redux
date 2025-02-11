import axios from "axios"
import { createAppSlice } from "store/createAppSlice"
import { RandomAdvicesSliceState } from "./types"
import { data } from "react-router-dom"

const randomAdviceInitialState: RandomAdvicesSliceState = {
  data: [],
  error: undefined,
  status: "default",
}

export const adviceRandomizerSlice = createAppSlice({
  name: "RANDOM_ADVICES",
  initialState: randomAdviceInitialState,
  reducers: create => ({
    getAdvice: create.asyncThunk(
      async (arg, thunkApi) => {
        try {
          const result = await axios.get("https://api.adviceslip.com/advice")
          return result.data
        } catch (error) {
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        pending: (state: RandomAdvicesSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: RandomAdvicesSliceState, action: any) => {
          state.data = [...state.data, action.payload.slip.advice]
          state.status = "sucess"
        },
        rejected: (state: RandomAdvicesSliceState, action: any) => {
          state.error = action.payload.message
          state.status = "error"
        },
      },
    ),
    removeAdvices: create.reducer((state: RandomAdvicesSliceState) => {
      state.data = []
    }),
  }),
  selectors: {
    adviceData: (state: RandomAdvicesSliceState) => state,
  },
})

export const RandomAdvicesActions = adviceRandomizerSlice.actions
export const RandomAdvicesSelectors = adviceRandomizerSlice.selectors
