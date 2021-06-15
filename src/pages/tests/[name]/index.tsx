import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import BinaryQuestionAnswer from 'src/components/BinaryQuestionAnswer'
import PageHead from 'src/components/layouts/PageHead'
import { tests } from 'src/models/binary-questions'
import { GlobalContext } from 'src/pages/_app'

const description = '심리 테스트를 진행해보아요'

function TestPage() {
  const { data, data2 } = useContext(GlobalContext)

  const [questionNumber, setQuestionNumber] = useState(0)

  const router = useRouter()

  const [testName, setTestName] = useState('')

  useEffect(() => {
    setTestName((router.query.name ?? '') as string)
  }, [router.query.name])

  const questions = tests[testName]?.questions
  const question = questions?.[questionNumber]

  return (
    <PageHead title={`심리테스트 - ${router.query.name ?? ''}`} description={description}>
      <h2>{router.query.name}</h2>
      <BinaryQuestionAnswer
        question={question?.question}
        onYes={() => {
          if (questionNumber >= questions.length - 1) {
            router.push(`/tests/${testName}/result`)
          } else {
            setQuestionNumber((prev) => prev + 1)
          }
        }}
        onNo={() => {
          if (questionNumber >= questions.length - 1) {
            router.push(`/tests/${testName}/result`)
          } else {
            setQuestionNumber((prev) => prev + 1)
          }
        }}
      />
    </PageHead>
  )
}

export default TestPage
