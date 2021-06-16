import { useRouter } from 'next/router'
import { useContext } from 'react'
import { PrimaryButton } from 'src/components/atoms/Button'
import PageHead from 'src/components/layouts/PageHead'
import useGoToPage from 'src/hooks/useGoToPage'
import { GlobalContext } from 'src/pages/_app'
import styled from 'styled-components'

const FlexContainerColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

const description = '결과를 확인해 보아요'

function TestResultPage() {
  const { result } = useContext(GlobalContext)

  const { query } = useRouter()

  const goToHomePage = useGoToPage('/')
  const goToTestsPage = useGoToPage('/tests')

  return (
    <PageHead title={`심리테스트 - ${query.name ?? ''} 결과`} description={description}>
      {Object.entries(result).map((r, index) => (
        <div key={index}>
          {r[0]}: {r[1]}
        </div>
      ))}
      <FlexContainerColumn>
        <PrimaryButton onClick={goToHomePage}>홈으로 가기</PrimaryButton>
        <PrimaryButton onClick={goToTestsPage}>다른 테스트 하기</PrimaryButton>
      </FlexContainerColumn>
    </PageHead>
  )
}

export default TestResultPage
