import Button from "../Button/Button"
import { ButtonWrapper, CounterWrapper, ResultContainer } from "./styles"

// 9. Импортируем hooks для dispatch и получения данных (селекторов)
import { useAppDispatch, useAppSelector } from "store/hooks"

// 10. Импортируем actions и селекторы, которые были созданы, и экспортируем в файле со slice
import {
  counterActions,
  counterSelectors,
} from "store/redux/counter/counterSlice"

function Counter() {
  // 11. Забираем значения counter из store
  const counter = useAppSelector(counterSelectors.counterValue)

  // 12. Получаем функцию dispatch, которую возвращает hook useDispatch
  // Доставляем action в Redux store и вызываем конкретный reducer
  const dispatch = useAppDispatch()

  const onMinus = () => {
    // 13. Диспатчим action (передаём в вызов функции dispatch необходимый идентификатор действия (action))
    // counterActions.minus() - action creater (создаёт action)
    // action является объектом, в котоом две пары "ключ-значение": payload и type
    // 1. Payload по-умолчанию undefined, но мы можем передать данные в reducer
    // 2. Type - это строка, благодаря которой мы можем вызывать конкретный reducer
    dispatch(counterActions.minus())
  }

  const onPlus = () => {
    // 13. Диспатчим action (передаём в вызов функции dispatch необходимый идентификатор действия (action))
    // 
    dispatch(counterActions.plus())
  }

  return (
    <CounterWrapper>
      <ButtonWrapper>
        <Button name="-" type="button" onClick={onMinus} />
      </ButtonWrapper>
      <ResultContainer>{counter}</ResultContainer>
      <ButtonWrapper>
        <Button name="+" type="button" onClick={onPlus} />
      </ButtonWrapper>
    </CounterWrapper>
  )
}

export default Counter
