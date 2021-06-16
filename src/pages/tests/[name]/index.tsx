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
  const { result, setResult } = useContext(GlobalContext)

  const [questionNumber, setQuestionNumber] = useState(0)

  const router = useRouter()

  const [testName, setTestName] = useState('')

  useEffect(() => {
    setResult({})
  }, [setResult])

  useEffect(() => {
    setTestName((router.query.name ?? '') as string)
  }, [router.query.name])

  const questions = tests[testName]?.questions
  const question = questions?.[questionNumber]

  function updateResult(yesOrNo: 'onYes' | 'onNo') {
    return () => {
      if (questionNumber >= questions.length - 1) {
        router.push(`/tests/${testName}/result`)
      } else {
        const newResult = { ...result }

        question[yesOrNo].forEach((action) => {
          if (!newResult[action.name]) {
            newResult[action.name] = 0
          }
          newResult[action.name] += action.value
        })

        setResult(newResult)
        setQuestionNumber((prev) => prev + 1)
      }
    }
  }

  return (
    <PageHead title={`심리테스트 - ${router.query.name ?? ''}`} description={description}>
      <FlexContainerBetweenCenter>
        <ClientSideLink href="/tests">
          <h2>{router.query.name}</h2>
        </ClientSideLink>
        <ClientSideLink href="/">
          <div>홈으로</div>
        </ClientSideLink>
      </FlexContainerBetweenCenter>
      <Padding>
        <BinaryQuestionAnswer
          question={question?.question}
          onYes={updateResult('onYes')}
          onNo={updateResult('onNo')}
        />
      </Padding>
    </PageHead>
  )
}

export default TestPage
