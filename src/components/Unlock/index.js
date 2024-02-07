// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  CardContainer,
  Button,
  LockImage,
  Paragraph,
} from './styledComponents'

const Unlock = () => {
  const [currentState, setterFun] = useState(true)

  const onClickButton = () => {
    setterFun(prevState => !prevState)
  }

  const buttonText = currentState ? 'Unlock' : 'Lock'

  const lockImage = currentState
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const altText = currentState ? 'lock' : 'unlock'
  const updatedStatus = currentState
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'
  return (
    <BgContainer>
      <CardContainer>
        <LockImage src={lockImage} alt={altText} />
        <Paragraph>{updatedStatus}</Paragraph>

        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </CardContainer>
    </BgContainer>
  )
}

export default Unlock
