// 1. Импортируем функцию, с помощью которой мы создаём slice
import { createAppSlice } from "store/createAppSlice"
import { CounterStateSlice } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

// 4.1. Создаём объект с первоначальным состоянием, который затем передаём в inintialState
const counterInititalState: CounterStateSlice = {
  count: 0,
}

// 2. Создаём slice для Counter с помощью вызова функции CreateAppSlice, в которую передаём объект настройки

// createAppSlice() возвращает в counterSlice сформированный объект
export const counterSlice = createAppSlice({
  // 3. Создаём имя, под которым будет храниться объект со значением Counter (state)
  // state для отдельных частей данных всегда представляет собой объект
  name: "COUNTER",

  // 4. Задаём объект, в котором будет храниться начальное состояние
  initialState: counterInititalState,

  // 5. Создём объект, внутри которого будут храниться reducers (функции, которые отвечают за изменение состояния)

  // Значением reducers является функция callback
  // Аргументом у функции callback является объект create
  // Объект create приходит "из коробки" React Toolkit

  // В объекте create есть ключ reducer, с помощью которого мы изменяем состояние
  // Reducer - функция, в качестве аргумента мы передаём в неё функцию callback,
  // у которой два аргумента - state и action, они не являются обязательными
  // - state является точной копией актуального state из Redux на момент использования функции
  // - action является объектом, в котоом две пары "ключ-значение": payload и type
    // 1. Payload по-умолчанию undefined, но мы можем передать данные в reducer
    // 2. Type - это строка, благодаря которой мы можем вызывать конкретный reducer
  reducers: create => ({
    plus: create.reducer((state: CounterStateSlice) => {
      state.count = state.count + 1
    }),
    minus: create.reducer(
      (state: CounterStateSlice, action: PayloadAction<number | undefined>) => {
        // state.count = state.count - 1
        if (action.payload) {
          state.count = state.count - action.payload
        } else {
          state.count = state.count - 1
        }
      },
    ),
  }),

  // 6. Создаём селекторы, которые позволяют забрать данные из state в компонент
  selectors: {
    counterValue: (state: CounterStateSlice) => state.count,
  },
})

console.log(counterSlice)

// 7. Экспорт actions и селекторов для возможности их использования в компонентах
// counterActions - это объект в котором лежат action-ы
// action - это объект, который позволяет при доставки в Redux store запускать конкретный reducer
export const counterActions = counterSlice.actions
// counterSelectors - это объект, в котром лежать selector-ы
// selector - это способ получения конкретных данных из Redux state
export const counterSelectors = counterSlice.selectors
