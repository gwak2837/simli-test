import ClientSideLink from 'src/components/atoms/ClientSideLink'
import PageHead from 'src/components/layouts/PageHead'
import { FlexContainerBetweenCenter } from '../tests/[name]'

const description = ''

function TermsOfServicePage() {
  return (
    <PageHead title="심리테스트 - 이용약관" description={description}>
      <FlexContainerBetweenCenter>
        <h2>이용약관</h2>
        <ClientSideLink href="/">
          <div>홈으로 가기</div>
        </ClientSideLink>
      </FlexContainerBetweenCenter>
    </PageHead>
  )
}

export default TermsOfServicePage
