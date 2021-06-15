import styled from 'styled-components'
import PageHead from '../components/layouts/PageHead'
import { useContext } from 'react'
import { FlexContainerBetween, FlexContainerAlignCenter } from 'src/styles/FlexContainer'
import { HEADER_HEIGHT, TABLET_MIN_WIDTH } from 'src/models/constants'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { GlobalContext } from './_app'
import { PrimaryButton, SecondaryButton } from 'src/components/atoms/Button'
import { FocusInExpandFwd } from 'src/styles/SpecialEffect'
import useGoToPage from 'src/hooks/useGoToPage'

const LocationText = styled.h3`
  margin: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
`

export const IconGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 16px 16px 16px;
  top: 0;
  align-items: center;
  height: 100%;
`

export const GridContainerUl = styled.ul<{ onlyImage: boolean }>`
  display: grid;
  grid-template-columns: ${(p) => (p.onlyImage ? '1fr 1fr 1fr' : '1fr')};
  gap: ${(p) => (p.onlyImage ? 'min(1vw, 0.5rem)' : 'min(2vw, 1rem)')};
  padding: ${(p) => (p.onlyImage ? 'min(1vw, 0.5rem)' : 'min(2vw, 1rem)')};

  background: #fcfcfc;
`

export const IconImg = styled.img`
  width: 700px;
  height: 400px;
  margin: 0;
`

export const StartImg = styled.img`
  width: 500px;
  height: 500px;
  margin: 0 8px 0 8px;
`

const StartButton = styled(SecondaryButton)`
  animation: ${FocusInExpandFwd} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`

const FlexContainerColumnCenter = styled(FlexContainerAlignCenter)`
  flex-flow: column nowrap;
  padding: 10rem 0;
`

const StartEffectTag = styled.div`
  animation: ${FocusInExpandFwd} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  text-align: center;
`

const TestSelectButton = styled(PrimaryButton)``

function HomePage() {
  const { data, data2 } = useContext(GlobalContext)

  const goToTestFisrtTest = useGoToPage('/tests/Test_1')
  const goToTestSecondTest = useGoToPage('/tests/Test_2')
  const goToTestThirdTest = useGoToPage('/tests/Test_3')
  const goToTestFourthTest = useGoToPage('/tests/Test_4')

  return (
    <PageHead>
      <FlexContainerColumnCenter>
        <ClientSideLink href="/users/username/regulars">
          <StartImg src="/simli_main.png" />
        </ClientSideLink>
        <StartButton>심리테스트 시작</StartButton>
        <FlexContainerAlignCenter>
          <LocationText>
            <StartEffectTag>쟤도 날 좋아할까? 그/그녀의 심리를 알고 싶다면?</StartEffectTag>
            <LocationText>
              나는 타고난 어그로 꾼인가? 당신의 숨겨진 정체를 깨닫고 싶다면?
            </LocationText>
            <LocationText>
              이 말을 가짜라고 생각하고 무시한다면 정말 안 좋은 사고가 꼭 일어납니다.
            </LocationText>
            지금 당장 시작하세요.
          </LocationText>
          <div>
            <TestSelectButton onClick={goToTestFisrtTest}>심리Test1</TestSelectButton>
            <TestSelectButton onClick={goToTestSecondTest}>심리Test2</TestSelectButton>
            <TestSelectButton onClick={goToTestThirdTest}>심리Test3</TestSelectButton>
            <TestSelectButton onClick={goToTestFourthTest}>심리Test4</TestSelectButton>
          </div>
        </FlexContainerAlignCenter>
      </FlexContainerColumnCenter>
    </PageHead>
  )
}

export default HomePage
