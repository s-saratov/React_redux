// 1. Импортируем функцию, с помощью которой мы создаём slice
import { createAppSlice } from "store/createAppSlice"
import { CounterStateSlice } from "./types"

// 4.1. Создаём объект с первоначальным состоянием, который затем передаём в inintialState
const counterInititalState: CounterStateSlice = {
  count: 0,
}

// 2. Создаём slice для Counter с помощью вызова функции CreateAppSlice, в которую передаём объект настройки

export const counterSlice = createAppSlice({
  // 3. Создаём имя, под которым будет храниться объект со значением Counter (state)
  // state для отдельных частей данных всегда представляет собой объект
  name: "COUNTER",

  // 4. Задаём объект, в котором будет храниться начальное состояние
  initialState: counterInititalState,

  // 5. Создём объект, внутри которого будут храниться reducers (функции, которые отвечают за изменение состояния)
  reducers: create => ({
    plus: create.reducer((state: CounterStateSlice) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterStateSlice) => {
      state.count = state.count - 1
    }),
  }),

  // 6. Создаём селекторы, которые позволяют забрать данные из state в компонент
  selectors: {
    counterValue: (state: CounterStateSlice) => state.count,
  },
})

// 7. Экспорт actions и селекторов для возможности их использования в компонентах
export const counterActions = counterSlice.actions
export const counterSelectors = counterSlice.selectors