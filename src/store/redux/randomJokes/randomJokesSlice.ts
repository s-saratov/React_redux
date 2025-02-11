import axios from "axios"
import { createAppSlice } from "store/createAppSlice"
import { RandomJokesSliceState } from "./types"

const randomJokeInitialState: RandomJokesSliceState = {
  data: [],
  error: undefined,
  status: "default",
}

export const randomJokeSlice = createAppSlice({
  name: "RANDOM_JOKES",
  initialState: randomJokeInitialState,
  // 1. Middleware создаём в объекте вместе с обычными reducers,
  // но с использованием метода asyncThunk
  reducers: create => ({
    // 2. Создаём Middleware с помощью метода asyncThunk из объекта create
    // Метод asyncThunk принимает два аргумента:
    // 1-й - асинхронная функция отправки запроса
    // 2-й - объект с тремя свойствами, которые содержат функции,
    // обрабатывающие результат выполнения асинхронной функции
    getJoke: create.asyncThunk(
      // Асинхронная функция принимает два аргумента:
      // 1. Arg, он позволяет передавать данные из компонента в асинхронную функцию,
      // например, для отправки данных на сервер при работе с методом post
      // 2. ThunkAPI (объект), он содержит вспомогательные функции для работы с передачей данных
      // из асинхронной функции в reducers (fulfilled, rejected)
      async (arg, thunkApi) => {
        try {
          const result = await axios.get(
            "https://official-joke-api.appspot.com/random_joke",
          )
          // 3. В случае успешного завершения запроса возвращаем полученные данные для того, чтобы получить их
          // в обработчике fulfilled, т.к. только редьюсеры имеют право изменять state
          return result.data
        } catch (error) {
          // 4. В случае ошибки необходимо отправить в обработчик rejected с помощью метода rejectedWithValue
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        // 5. Обрабатываем действия, которые должные происходить, котода произошла отправка запроса,
        // но результат мы ещё ждём
        pending: (state: RandomJokesSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        // 6. Обработка успешного результа
        fulfilled: (state: RandomJokesSliceState, action: any) => {
          state.data = [
            ...state.data,
            `${action.payload.setup} - ${action.payload.punchline}`,
          ]
          state.status = "sucess"
        },
        // 7. Обработка ошибки
        rejected: (state: RandomJokesSliceState, action: any) => {
          state.error = action.payload.message
          state.status = "error"
        },
      },
    ),
  }),
  selectors: {
    jokeData: (state: RandomJokesSliceState) => state,
  },
})

export const randomJokesActions = randomJokeSlice.actions
export const randomJokesSelectors = randomJokeSlice.selectors
