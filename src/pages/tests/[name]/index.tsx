import { useRouter } from 'next/router'
import PageHead from 'src/components/layouts/PageHead'

const description = '심리 테스트를 진행해보아요'

function TestPage() {
  const { query } = useRouter()

  return (
    <PageHead title={`심리테스트 - ${query.name}`} description={description}>
      {}
    </PageHead>
  )
}

export default TestPage
