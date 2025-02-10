import Button from "../Button/Button"
import {
  FeedbackContainer,
  FeedbackResultContainer,
  LikeDislikeContainer,
  Result,
} from "./styles"

import { useAppDispatch, useAppSelector } from "store/hooks"

import {
  feedbackActions,
  feedbackSelectors,
} from "store/redux/feedback/feedbackSlice"

function Feedback() {
  const likes = useAppSelector(feedbackSelectors.likesValue)
  const dislikes = useAppSelector(feedbackSelectors.dislikesValue)
  const dispatch = useAppDispatch()

  const like = () => {
    dispatch(feedbackActions.like())
  }

  const dislike = () => {
    dispatch(feedbackActions.dislike())
  }

  const reset = () => {
    dispatch(feedbackActions.reset())
  }

  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Result>{likes}</Result>
          <Button name="LIKE" type="button" onClick={like} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Result>{dislikes}</Result>
          <Button name="DISLIKE" type="button" onClick={dislike} />
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="RESET RESULTS" type="button" onClick={reset} />
    </FeedbackContainer>
  )
}

export default Feedback