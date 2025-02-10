import { createAppSlice } from "store/createAppSlice"
import { FeedbackStateSlice } from "./types"

const feedbackInitialState: FeedbackStateSlice = {
  likes: 0,
  dislikes: 0,
}
export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,

  reducers: create => ({
    like: create.reducer((state: FeedbackStateSlice) => {
      state.likes = state.likes + 1
    }),
    dislike: create.reducer((state: FeedbackStateSlice) => {
      state.dislikes = state.dislikes + 1
    }),
    reset: create.reducer((state: FeedbackStateSlice) => {
      state.likes = 0
      state.dislikes = 0
    }),
  }),

  selectors: {
    likesValue: (state: FeedbackStateSlice) => state.likes,
    dislikesValue: (state: FeedbackStateSlice) => state.dislikes,
  },
})

export const feedbackActions = feedbackSlice.actions
export const feedbackSelectors = feedbackSlice.selectors
