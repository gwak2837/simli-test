import { Progress } from 'antd'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { PrimaryButton } from 'src/components/atoms/Button'
import PageHead from 'src/components/layouts/PageHead'
import useGoToPage from 'src/hooks/useGoToPage'
import { tests } from 'src/models/binary-questions'
import { GlobalContext } from 'src/pages/_app'
import styled from 'styled-components'

const CenterPaddingH2 = styled.h2`
  padding: 2rem 1rem;
  text-align: center;
`

const GridContainerUl = styled.ul`
  display: grid;
  gap: 2rem;
  padding: 2rem 1rem;
`

const GridContainerGap = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem 1rem;
`

const FlexContainerColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;

  padding: 1rem;
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

  const r = tests[(query.name ?? '') as string]?.results[0]

  console.log(r)

  if (!r) {
    return (
      <PageHead title={`심리테스트 - ${query.name ?? ''} 결과`} description={description}>
        <CenterPaddingH2>{query.name ?? ''} 테스트는 존재하지 않아요</CenterPaddingH2>
        <FlexContainerColumn>
          <PrimaryButton onClick={goToHomePage}>홈으로 가기</PrimaryButton>
          <PrimaryButton onClick={goToTestsPage}>테스트 하러 가기</PrimaryButton>
        </FlexContainerColumn>
      </PageHead>
    )
  }

  if (Object.keys(result).length === 0) {
    return (
      <PageHead title={`심리테스트 - ${query.name ?? ''} 결과`} description={description}>
        <CenterPaddingH2>테스트를 모두 진행해야 결과를 볼 수 있어요</CenterPaddingH2>
        <FlexContainerColumn>
          <PrimaryButton onClick={goToHomePage}>홈으로 가기</PrimaryButton>
          <PrimaryButton onClick={goToTestsPage}>테스트 하러 가기</PrimaryButton>
        </FlexContainerColumn>
      </PageHead>
    )
  }

  const results = Object.entries(result)
  const maxResult = Math.max(...results.map((result) => result[1])) + correction
  const minResult = Math.min(...results.map((result) => result[1])) - correction

  return (
    <PageHead title={`심리테스트 - ${query.name ?? ''} 결과`} description={description}>
      <CenterPaddingH2>{r.title}</CenterPaddingH2>
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
      <GridContainerGap>
        {r.contents.map((content) =>
          content?.tag === 'div' ? (
            <div key={content.id}>{content.content}</div>
          ) : (
            <p key={content.id}>{content.content}</p>
          )
        )}
      </GridContainerGap>
      <FlexContainerColumn>
        <PrimaryButton onClick={goToHomePage}>홈으로 가기</PrimaryButton>
        <PrimaryButton onClick={goToTestsPage}>다른 테스트 하기</PrimaryButton>
      </FlexContainerColumn>
    </PageHead>
  )
}

export default TestResultPage
