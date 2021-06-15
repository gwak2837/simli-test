import { useRouter } from 'next/router'
import { useContext } from 'react'
import PageHead from 'src/components/layouts/PageHead'
import { GlobalContext } from 'src/pages/_app'

const description = '결과를 확인해 보아요'

function TestResultPage() {
  const { result } = useContext(GlobalContext)

  const { query } = useRouter()

  return (
    <PageHead title={`심리테스트 - ${query.name ?? ''} 결과`} description={description}>
      {Object.entries(result).map((r, index) => (
        <div key={index}>
          {r[0]}: {r[1]}
        </div>
      ))}
    </PageHead>
  )
}

export default TestResultPage
