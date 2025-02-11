import Button from "components/Button/Button"
import {
  AdviceCard,
  AdvicesContainer,
  AdviceRandomizerWrapper,
  AdviceText,
  ErrorWrapper,
} from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  RandomAdvicesActions,
  RandomAdvicesSelectors,
} from "store/redux/adviceRandomizer/adviceRandomizerSlice"
import { v4 } from "uuid"
import Spinner from "components/Spinner/Spinner"

function AdviceRandomizer() {
  const { data, error, status } = useAppSelector(RandomAdvicesSelectors.adviceData)
  const dispatch = useAppDispatch()

  const Advices = data.map(Advice => {
    return <AdviceText key={v4()}>{Advice}</AdviceText>
  })

  const getAdvice = () => {
    dispatch(RandomAdvicesActions.getAdvice())
  }

  const removeAdvices = () => {
    dispatch(RandomAdvicesActions.removeAdvices())
  }

  return (
    <AdviceRandomizerWrapper>
      <AdviceCard>
        <Button name="GET ADVICE" disabled={status === "loading"} onClick={getAdvice} />
        {status === "loading" && <Spinner />}
        {error && <ErrorWrapper>{error}</ErrorWrapper>}
        <AdvicesContainer>{Advices}</AdvicesContainer>
        <Button name="DELETE ADVICES" onClick={removeAdvices} />
      </AdviceCard>
    </AdviceRandomizerWrapper>
  )
}

export default AdviceRandomizer