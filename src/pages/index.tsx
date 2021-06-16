import styled from 'styled-components'
import PageHead from '../components/layouts/PageHead'
import { FlexContainerAlignCenter } from 'src/styles/FlexContainer'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { SecondaryButton } from 'src/components/atoms/Button'
import Footer from 'src/components/Footer'
import { focusInExpandFwd } from 'src/styles/SpecialEffect'
import useGoToPage from 'src/hooks/useGoToPage'
import Image from 'next/image'
import React from 'react'

const LocationText = styled.h3`
  margin: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
`

export const SquareFrame = styled.div`
  padding-top: 100%;
  position: relative;
`

const StartButton = styled(SecondaryButton)`
  animation: ${focusInExpandFwd} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`

const FlexContainerColumnCenter = styled(FlexContainerAlignCenter)`
  flex-flow: column nowrap;
  margin: 1rem 0;
`

const StartEffectTag = styled(LocationText)`
  animation: ${focusInExpandFwd} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  text-align: center;
`

const Padding = styled.div`
  padding: 2rem 0;
`

function HomePage() {
  const goToTestsPage = useGoToPage('/tests')

  return (
    <PageHead>
      <Padding>
        <SquareFrame>
          <ClientSideLink href="/tests">
            <Image src="/simli-main.jpg" alt="main-image" layout="fill" objectFit="cover" />
          </ClientSideLink>
        </SquareFrame>
        <FlexContainerColumnCenter>
          <StartButton onClick={goToTestsPage}>심리테스트 시작</StartButton>
          <FlexContainerAlignCenter>
            <div>
              <StartEffectTag>쟤도 날 좋아할까? 그/그녀의 심리를 알고 싶다면?</StartEffectTag>
              <LocationText>
                나는 타고난 어그로 꾼인가? 당신의 숨겨진 정체를 깨닫고 싶다면?
              </LocationText>
              <LocationText>
                이 말을 가짜라고 생각하고 무시한다면 정말 안 좋은 사고가 꼭 일어납니다.
              </LocationText>
              <LocationText>지금 당장 시작하세요.</LocationText>
            </div>
          </FlexContainerAlignCenter>
        </FlexContainerColumnCenter>
        <Footer />
      </Padding>
    </PageHead>
  )
}

export default HomePage
