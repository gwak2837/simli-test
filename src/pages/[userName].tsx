import PageHead from 'src/components/layouts/PageHead'
import NavigationLayout from '../components/layouts/NavigationLayout'

const description = '내가 지금까지 한 심리 테스트를 볼 수 있어요'

function UserPage() {
  return (
    <PageHead title="심리테스트 - 마이 페이지" description={description}>
      <NavigationLayout>asdf</NavigationLayout>
    </PageHead>
  )
}

export default UserPage
