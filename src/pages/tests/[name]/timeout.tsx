import { useRouter } from 'next/router'
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
const description = '심리 테스트를 빨리 해야겠어요..!'

function TimeoutPage() {
  const router = useRouter()
  const testName = (router.query.name ?? '') as string

  const goToTestPage = useGoToPage(`/tests/${testName}`)
  const goToTestsPage = useGoToPage('/tests')
  const goToHomePage = useGoToPage('/')

  return (
    <PageHead title={title} description={description}>
      <CenterPaddingH1>1분 시간초과입니다. 다시 하실까요?</CenterPaddingH1>
      <FlexContainerColumnPadding>
        <PrimaryButton onClick={goToTestPage}>다시 하기</PrimaryButton>
        <PrimaryButton onClick={goToTestsPage}>다른 테스트 하기</PrimaryButton>
        <PrimaryButton onClick={goToHomePage}>홈으로 가기</PrimaryButton>
      </FlexContainerColumnPadding>
    </PageHead>
  )
}
export default TimeoutPage
