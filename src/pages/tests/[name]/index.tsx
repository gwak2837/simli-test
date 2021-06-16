import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { Padding } from 'src/components/atoms/Styles'
import BinaryQuestionAnswer from 'src/components/BinaryQuestionAnswer'
import PageHead from 'src/components/layouts/PageHead'
import { tests } from 'src/models/binary-questions'
import { GlobalContext } from 'src/pages/_app'
import styled from 'styled-components'

const FlexContainerBetweenCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
`

const description = '심리 테스트를 진행해보아요'

function TestPage() {
  const { selections, setSelections } = useContext(GlobalContext)

  const [questionNumber, setQuestionNumber] = useState(0)

  const router = useRouter()

  const testName = (router.query.name ?? '') as string
  const testNameWithSpace = testName.replaceAll('-', ' ')

  useEffect(() => {
    setSelections(null)
  }, [setSelections])

  const questions = tests[testName]?.questions
  const question = questions?.[questionNumber]

  function updateResult(yesOrNo: 'onYes' | 'onNo') {
    return () => {
      if (questionNumber >= questions.length - 1) {
        router.push(`/tests/${testName}/result`)
      } else {
        const newResult = { ...selections }

        question[yesOrNo].forEach((action) => {
          if (!newResult[action.name]) {
            newResult[action.name] = 0
          }
          newResult[action.name] += action.value
        })

        setSelections(newResult)
        setQuestionNumber((prev) => prev + 1)
      }
    }
  }

  return (
    <PageHead title={`심리테스트 - ${testNameWithSpace}`} description={description}>
      <FlexContainerBetweenCenter>
        <h2>{testNameWithSpace}</h2>
        <ClientSideLink href="/tests">
          <div>다른 테스트 하기</div>
        </ClientSideLink>
      </FlexContainerBetweenCenter>
      <Padding>
        <BinaryQuestionAnswer
          number={question?.id}
          question={question?.question}
          onYes={updateResult('onYes')}
          onNo={updateResult('onNo')}
        />
      </Padding>
    </PageHead>
  )
}

export default TestPage
