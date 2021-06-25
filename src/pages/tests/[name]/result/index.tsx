import { Progress } from 'antd'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { PrimaryButton } from 'src/components/atoms/Button'
import { FlexContainerColumn } from 'src/styles/FlexContainer'
import PageHead from 'src/components/layouts/PageHead'
import useGoToPage from 'src/hooks/useGoToPage'
import { GlobalContext } from 'src/pages/_app'
import styled from 'styled-components'
import Image from 'next/image'
import { tests } from 'src/models/binary-questions'

export const CenterPaddingH1 = styled.h1`
  padding: 3rem 1rem;
  text-align: center;
`

const GridContainerUl = styled.ul`
  display: grid;
  gap: 2rem;
  padding: 1rem;
`

const Frame16x9 = styled.div`
  position: relative;
  padding-top: 56.25%;

  margin: 3rem 0;
`

const GridContainerGap = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem 1rem;
`

const FlexContainerColumnPadding = styled(FlexContainerColumn)`
  padding: 1rem;
`

export const gradientBlueGreen = {
  '0%': '#108ee9',
  '100%': '#87d068',
}

const correction = 20

const description = '결과를 확인해 보아요'

function TestResultPage() {
  const { answers } = useContext(GlobalContext)

  const goToHomePage = useGoToPage('/')
  const goToTestsPage = useGoToPage('/tests')

  const { query } = useRouter()
  const testName = (query.name ?? '') as string
  const test = tests[testName]
  const title = `심리테스트 - ${testName} 결과`

  if (!test) {
    return (
      <PageHead title={title} description={description}>
        <CenterPaddingH1>{testName} 테스트는 존재하지 않아요</CenterPaddingH1>
        <FlexContainerColumnPadding>
          <PrimaryButton onClick={goToHomePage}>홈으로 가기</PrimaryButton>
          <PrimaryButton onClick={goToTestsPage}>심리 테스트 하기</PrimaryButton>
        </FlexContainerColumnPadding>
      </PageHead>
    )
  }

  if (!answers) {
    return (
      <PageHead title={title} description={description}>
        <CenterPaddingH1>테스트를 모두 진행해야 결과를 볼 수 있어요</CenterPaddingH1>
        <FlexContainerColumnPadding>
          <PrimaryButton onClick={goToHomePage}>홈으로 가기</PrimaryButton>
          <PrimaryButton onClick={goToTestsPage}>심리 테스트 하기</PrimaryButton>
        </FlexContainerColumnPadding>
      </PageHead>
    )
  }

  console.log(answers)

  const resultIndex = test.results.findIndex((result) => result.condition(answers))
  const result = test.results[resultIndex] ?? test.results[0]

  const answersEntries = Object.entries(answers)
  const maxAnswer = Math.max(...answersEntries.map((answersEntry) => answersEntry[1])) + correction
  const minAnswer = Math.min(...answersEntries.map((answersEntry) => answersEntry[1])) - correction

  return (
    <PageHead title={title} description={description}>
      <CenterPaddingH1>{result.title}</CenterPaddingH1>
      <GridContainerUl>
        {answersEntries.map((answersEntry, index) => (
          <li key={index}>
            <h4>{answersEntry[0]}</h4>
            <Progress
              format={(percent) => Math.round((percent ?? 0) * 10) / 10}
              percent={((answersEntry[1] - minAnswer) * 100) / (maxAnswer - minAnswer)}
              status={answersEntry[1] === maxAnswer - correction ? 'active' : 'normal'}
              strokeColor={gradientBlueGreen}
            />
          </li>
        ))}
      </GridContainerUl>

      {result.imageUrl && (
        <Frame16x9>
          <Image src={result.imageUrl} alt={result.imageUrl} layout="fill" objectFit="cover" />
        </Frame16x9>
      )}

      <GridContainerGap>
        {result.contents.map((content) =>
          content?.tag === 'div' ? (
            <div key={content.id}>{content.content}</div>
          ) : (
            <p key={content.id}>{content.content}</p>
          )
        )}
      </GridContainerGap>

      <FlexContainerColumnPadding>
        <PrimaryButton onClick={goToHomePage}>홈으로 가기</PrimaryButton>
        <PrimaryButton onClick={goToTestsPage}>다른 테스트 하기</PrimaryButton>
      </FlexContainerColumnPadding>
    </PageHead>
  )
}

export default TestResultPage
