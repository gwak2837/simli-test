import styled from 'styled-components'
import { PrimaryButton } from './atoms/Button'

const Padding = styled.div`
  padding: 2rem;
`

const FlexContainerColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

type Props = {
  number: string
  question: string
  onYes: () => void
  onNo: () => void
}

function BinaryQuestionAnswer({ number, question, onYes, onNo }: Props) {
  return (
    <Padding>
      <h3>
        Q{number}. {question}
      </h3>
      <Padding />
      <FlexContainerColumn>
        <PrimaryButton onClick={onYes}>네</PrimaryButton>
        <PrimaryButton onClick={onNo}>아니요</PrimaryButton>
      </FlexContainerColumn>
    </Padding>
  )
}

export default BinaryQuestionAnswer
