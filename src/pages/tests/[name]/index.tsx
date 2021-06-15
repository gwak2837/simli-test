import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import BinaryQuestionAnswer from 'src/components/BinaryQuestionAnswer'
import PageHead from 'src/components/layouts/PageHead'
import { questions } from 'src/models/question-result'
import { GlobalContext } from 'src/pages/_app'

const description = '심리 테스트를 진행해보아요'

function TestPage() {
  const { data, data2 } = useContext(GlobalContext)

  const [questionNumber, setQuestionNumber] = useState(0)

  const router = useRouter()

  const [questionName, setQuestionName] = useState('')

  useEffect(() => {
    setQuestionName((router.query.name ?? '') as string)
  }, [router.query.name])

  const question = questions[questionName] ? questions[questionName][questionNumber] : ''

  return (
    <PageHead title={`심리테스트 - ${router.query.name ?? ''}`} description={description}>
      <h2>{router.query.name}</h2>
      <BinaryQuestionAnswer
        question={question}
        onYes={() => {
          if (questionNumber >= questions[questionName].length - 1) {
            router.push(`/tests/${questionName}/result`)
          } else {
            setQuestionNumber((prev) => prev + 1)
          }
        }}
        onNo={() => {
          if (questionNumber >= questions[questionName].length - 1) {
            router.push(`/tests/${questionName}/result`)
          } else {
            setQuestionNumber((prev) => prev + 1)
          }
        }}
      />
    </PageHead>
  )
}

export default TestPage
