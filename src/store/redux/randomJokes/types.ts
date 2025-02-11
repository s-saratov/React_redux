export interface RandomJokesSliceState {
  data: string[]
  error: undefined
  status: "default" | "loading" | "sucess" | "error"
}