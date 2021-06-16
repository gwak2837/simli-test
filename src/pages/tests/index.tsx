import PageHead from 'src/components/layouts/PageHead'
import styled from 'styled-components'
import Image from 'next/image'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { fadeIn } from 'src/styles/SpecialEffect'

const RelativePosition = styled.div`
  position: relative;

  @keyframes fadeOut1 {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.1;
    }
  }

  :hover {
    > h3 {
      animation-name: ${fadeIn};
      animation-duration: 1s;
      opacity: 1;
    }
    > a > div > img {
      animation-name: fadeOut1;
      animation-duration: 1s;
      opacity: 0.1;
    }
  }
`

const TestExplainText = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  font-size: 1.4rem;
`

const GridContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  width: 100%;
  height: 100vh; // aspect-ratio 가 지원될 때까지 넣어 놓기
  aspect-ratio: 1 / 1;
  background: #eee;
`

const description = '테스트 목록을 확인해보세요'

function TestsPage() {
  return (
    <PageHead title="심리테스트 - 테스트 목록" description={description}>
      <h1>원하는 테스트를 골라보세요</h1>
      <GridContainer>
        <RelativePosition>
          <TestExplainText>조선시대 당신의 신분은?</TestExplainText>
          <ClientSideLink href="/tests/Test_1">
            <Image src="/Joseon.jpg" alt="test-1-image" layout="fill" objectFit="cover" />
          </ClientSideLink>
        </RelativePosition>
        <RelativePosition>
          <TestExplainText>일중독 TEST</TestExplainText>
          <ClientSideLink href="/tests/Test_2">
            <Image src="/workaholic.jpg" alt="test-image" layout="fill" objectFit="cover" />
          </ClientSideLink>
        </RelativePosition>
        <RelativePosition>
          <TestExplainText>호구 TEST</TestExplainText>
          <ClientSideLink href="/tests/Test_3">
            <Image src="/hogu.jpg" alt="test-image" layout="fill" objectFit="cover" />
          </ClientSideLink>
        </RelativePosition>
        <RelativePosition>
          <TestExplainText>자아도취 TEST</TestExplainText>
          <ClientSideLink href="/tests/Test_4">
            <Image src="/narcissim.jpg" alt="test-image" layout="fill" objectFit="cover" />
          </ClientSideLink>
        </RelativePosition>
      </GridContainer>
    </PageHead>
  )
}

export default TestsPage
