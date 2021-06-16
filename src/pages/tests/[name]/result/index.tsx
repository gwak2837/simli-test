import { Progress } from 'antd'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { PrimaryButton } from 'src/components/atoms/Button'
import PageHead from 'src/components/layouts/PageHead'
import useGoToPage from 'src/hooks/useGoToPage'
import { GlobalContext } from 'src/pages/_app'
import styled from 'styled-components'

const GridContainerUl = styled.ul`
  display: grid;
  gap: 2rem;
  padding: 2rem 1rem;
`

const FlexContainerColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

const gradientBlueGreen = {
  '0%': '#108ee9',
  '100%': '#87d068',
}

const correction = 20

const description = '결과를 확인해 보아요'

function TestResultPage() {
  const { result } = useContext(GlobalContext)

  const { query } = useRouter()

  const goToHomePage = useGoToPage('/')
  const goToTestsPage = useGoToPage('/tests')

  const results = Object.entries(result)
  const maxResult = Math.max(...results.map((result) => result[1])) + correction
  const minResult = Math.min(...results.map((result) => result[1])) - correction

  console.log(results)
  console.log(minResult, maxResult)

  return (
    <PageHead title={`심리테스트 - ${query.name ?? ''} 결과`} description={description}>
      <GridContainerUl>
        {results.map((result, index) => (
          <li key={index}>
            <h4>{result[0]}</h4>
            <Progress
              format={(percent) => Math.round((percent ?? 0) * 10) / 10}
              percent={((result[1] - minResult) * 100) / (maxResult - minResult)}
              status={result[1] === maxResult - correction ? 'active' : 'normal'}
              strokeColor={gradientBlueGreen}
            />
          </li>
        ))}
      </GridContainerUl>
      <FlexContainerColumn>
        <PrimaryButton onClick={goToHomePage}>홈으로 가기</PrimaryButton>
        <PrimaryButton onClick={goToTestsPage}>다른 테스트 하기</PrimaryButton>
      </FlexContainerColumn>
    </PageHead>
  )
}

export default TestResultPage
