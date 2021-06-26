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
import { tests } from 'src/models/binary-questions'
import { GlobalContext } from 'src/pages/_app'
import { FlexContainerColumn } from 'src/styles/FlexContainer'
import styled from 'styled-components'
import { CenterPaddingH1, gradientBlueGreen } from './result'

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
  const test = tests[testName]
  const title = `심리테스트 - ${testNameWithSpace}`

  useEffect(() => {
    setAnswers(null)
  }, [setAnswers])

  if (!test) {
    return (
      <PageHead title={title} description={description}>
        <CenterPaddingH1>{testNameWithSpace} 테스트는 존재하지 않아요</CenterPaddingH1>
        <FlexContainerColumnPadding>
          <PrimaryButton onClick={goToHomePage}>홈으로 가기</PrimaryButton>
          <PrimaryButton onClick={goToTestsPage}>심리 테스트 하기</PrimaryButton>
        </FlexContainerColumnPadding>
      </PageHead>
    )
  }

  const questions = test.questions
  const question = questions[questionNumber]

  function updateResult(yesOrNo: 'onYes' | 'onNo') {
    return () => {
      if (questionNumber >= questions.length - 1) {
        router.push(`/tests/${testName}/result`)
      } else {
        const newAnswers = { ...answers }

        question[yesOrNo].forEach((action) => {
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
          onTimeout={() => router.push(`/tests/${testName}/result/timeout`)}
          seconds={questions.length * 10}
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
