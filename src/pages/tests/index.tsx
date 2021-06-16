import PageHead from 'src/components/layouts/PageHead'
import styled from 'styled-components'
import Image from 'next/image'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { fadeIn } from 'src/styles/SpecialEffect'
import React from 'react'
import { CenterPaddingH1 } from './[name]/result'

const RelativePosition = styled.div`
  position: relative;
  line-height: 0;

  @keyframes fadeOut1 {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.1;
    }
  }

  :hover {
    > h2 {
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

const AbsolutePositionH2 = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  opacity: 0;
  text-align: center;
  line-height: normal;
`

const GridContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  width: 100%;
  /* height: 100vh; // 모든 브라우저에서 aspect-ratio 가 지원될 때까지 넣어 놓기 */
  /* aspect-ratio: 1 / 1; */
  background: #eee;
`

const description = '테스트 목록을 확인해보세요'

function TestsPage() {
  return (
    <PageHead title="심리테스트 - 테스트 목록" description={description}>
      <CenterPaddingH1>원하는 테스트를 골라보세요</CenterPaddingH1>
      <GridContainer>
        <RelativePosition>
          <AbsolutePositionH2>일중독 TEST</AbsolutePositionH2>
          <ClientSideLink href="/tests/Test_1">
            <Image
              src="/workaholic.jpg"
              alt="/workaholic.jpg"
              width="300"
              height="300"
              objectFit="cover"
            />
          </ClientSideLink>
        </RelativePosition>
        <RelativePosition>
          <AbsolutePositionH2>조선시대 당신의 신분은?</AbsolutePositionH2>
          <ClientSideLink href="/tests/Test_2">
            <Image src="/joseon.jpg" alt="/joseon.jpg" width="300" height="300" objectFit="cover" />
          </ClientSideLink>
        </RelativePosition>
        <RelativePosition>
          <AbsolutePositionH2>호구 TEST</AbsolutePositionH2>
          <ClientSideLink href="/tests/Test_3">
            <Image src="/hogu.jpg" alt="/hogu.jpg" width="300" height="300" objectFit="cover" />
          </ClientSideLink>
        </RelativePosition>
        <RelativePosition>
          <AbsolutePositionH2>자아도취 TEST</AbsolutePositionH2>
          <ClientSideLink href="/tests/Test_4">
            <Image
              src="/narcissism.jpg"
              alt="test-image"
              width="300"
              height="300"
              objectFit="cover"
            />
          </ClientSideLink>
        </RelativePosition>
      </GridContainer>
    </PageHead>
  )
}

export default TestsPage
