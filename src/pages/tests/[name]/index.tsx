import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import BinaryQuestionAnswer from 'src/components/BinaryQuestionAnswer'
import PageHead from 'src/components/layouts/PageHead'
import { GlobalContext } from 'src/pages/_app'

const description = '심리 테스트를 진행해보아요'

function TestPage() {
  const { data, data2 } = useContext(GlobalContext)

  const { query } = useRouter()

  return (
    <PageHead title={`심리테스트 - ${query.name}`} description={description}>
      <h2>{query.name}</h2>
      <BinaryQuestionAnswer
        question="Q. 당신은 점심 먹었나요?"
        onYes={() => console.log('네')}
        onNo={() => console.log('아니요')}
      />
    </PageHead>
  )
}

export default TestPage
