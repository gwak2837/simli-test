import { PrimaryButton } from 'src/components/atoms/Button'
import PageHead from 'src/components/layouts/PageHead'
import useGoToPage from 'src/hooks/useGoToPage'
import { FlexContainerColumn } from 'src/styles/FlexContainer'
import styled from 'styled-components'

export const FlexContainerBetweenCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
`

export const CenterPaddingH1 = styled.h1`
  padding: 3rem 1rem;
  text-align: center;
`

const FlexContainerColumnPadding = styled(FlexContainerColumn)`
  padding: 2rem;
`

const title = '심리테스트 - 시간 초과'
const description = '심리 테스트를 진행해보아요'

function TimeoutPage() {
  const goToHomePage = useGoToPage('/')
  const goToTestsPage = useGoToPage('/tests')

  return (
    <PageHead title={title} description={description}>
      <CenterPaddingH1> 빨리해 느려...</CenterPaddingH1>
      <FlexContainerColumnPadding>
        <PrimaryButton onClick={goToHomePage}>홈으로 가기</PrimaryButton>
        <PrimaryButton onClick={goToTestsPage}>심리 테스트 하기</PrimaryButton>
      </FlexContainerColumnPadding>
    </PageHead>
  )
}
export default TimeoutPage
