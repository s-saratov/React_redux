export interface RandomAdvicesSliceState {
  data: string[]
  error: undefined
  status: "default" | "loading" | "sucess" | "error"
}