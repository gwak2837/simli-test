import { Progress } from 'antd'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { PrimaryButton } from 'src/components/atoms/Button'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { Padding } from 'src/components/atoms/Styles'
import BinaryQuestionAnswer from 'src/components/BinaryQuestionAnswer'
import PageHead from 'src/components/layouts/PageHead'
import Timer from 'src/components/Timer'
import useGoToPage from 'src/hooks/useGoToPage'
import { GlobalContext } from 'src/pages/_app'
import { FlexContainerColumn } from 'src/styles/FlexContainer'
import styled from 'styled-components'
import { gradientBlueGreen } from './result'
import useSwr from 'swr'
import { fetcher } from 'src/utils/commons'

export const FlexContainerBetweenCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
`

const FlexContainerColumnPadding = styled(FlexContainerColumn)`
  padding: 2rem;
`

const description = '심리 테스트를 진행해보아요'

function TestPage() {
  const { answers, setAnswers } = useContext(GlobalContext)

  const goToHomePage = useGoToPage('/')
  const goToTestsPage = useGoToPage('/tests')

  const [questionNumber, setQuestionNumber] = useState(0)

  const router = useRouter()
  const testName = (router.query.name ?? '') as string
  const testNameWithSpace = testName.replace(/-/g, ' ')
  const title = `심리테스트 - ${testNameWithSpace}`

  const { data, error } = useSwr(`/api/tests/${testName}`, fetcher)

  useEffect(() => {
    setAnswers(null)
  }, [setAnswers])

  if (!data && !error) {
    return (
      <PageHead title={title} description={description}>
        <FlexContainerBetweenCenter>
          <h2>{testNameWithSpace}</h2>
          <ClientSideLink href="/tests">
            <div>다른 테스트 하기</div>
          </ClientSideLink>
        </FlexContainerBetweenCenter>
        테스트 문항 불러오는 중...
      </PageHead>
    )
  }

  if (error) {
    return (
      <PageHead title={title} description={description}>
        네트워크 오류 발생
        <FlexContainerColumnPadding>
          <PrimaryButton onClick={goToTestsPage}>다른 심리 테스트 하기</PrimaryButton>
          <PrimaryButton onClick={goToHomePage}>홈으로 가기</PrimaryButton>
        </FlexContainerColumnPadding>
      </PageHead>
    )
  }

  if (data.message) {
    return (
      <PageHead title={title} description={description}>
        <h3 style={{ textAlign: 'center' }}>{data.message}</h3>
        <FlexContainerColumnPadding>
          <PrimaryButton onClick={goToTestsPage}>다른 심리 테스트 하기</PrimaryButton>
          <PrimaryButton onClick={goToHomePage}>홈으로 가기</PrimaryButton>
        </FlexContainerColumnPadding>
      </PageHead>
    )
  }

  const questions = data.questions
  const question = questions[questionNumber]

  function updateResult(yesOrNo: 'onYes' | 'onNo') {
    return () => {
      if (questionNumber >= questions.length - 1) {
        router.push(`/tests/${testName}/result`)
      } else {
        const newAnswers = { ...answers }

        question[yesOrNo].forEach((action: any) => {
          if (!newAnswers[action.name]) {
            newAnswers[action.name] = 0
          }
          newAnswers[action.name] += action.value
        })

        setAnswers(newAnswers)
        setQuestionNumber((prev) => prev + 1)
      }
    }
  }

  return (
    <PageHead title={title} description={description}>
      <FlexContainerBetweenCenter>
        <h2>{testNameWithSpace}</h2>
        <Timer
          onTimeout={() => router.push(`/tests/${testName}/timeout`)}
          seconds={questions.length * 5}
        />
        <ClientSideLink href="/tests">
          <div>다른 테스트 하기</div>
        </ClientSideLink>
      </FlexContainerBetweenCenter>
      <Padding>
        <Progress
          format={() => `${question.id}/${questions.length}`}
          percent={(+question.id * 100) / questions.length}
          status="normal"
          strokeColor={gradientBlueGreen}
        />
      </Padding>
      <Padding>
        <BinaryQuestionAnswer
          number={question.id}
          question={question.question}
          onYes={updateResult('onYes')}
          onNo={updateResult('onNo')}
        />
      </Padding>
    </PageHead>
  )
}

export default TestPage
