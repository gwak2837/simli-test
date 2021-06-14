import styled from 'styled-components'
import NavigationLayout from '../components/layouts/NavigationLayout'
import PageHead from '../components/layouts/PageHead'
import { useContext } from 'react'
import { FlexContainerBetween, FlexContainerAlignCenter } from 'src/styles/FlexContainer'
import { HEADER_HEIGHT, TABLET_MIN_WIDTH } from 'src/models/constants'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { GlobalContext } from './_app'
import { StartButton } from 'src/components/atoms/Button'

const FlexContainerBetweenCenter = styled(FlexContainerBetween)`
  align-items: center;
  height: 100%;
`

const LocationText = styled.h3`
  margin: 16px 2px 16px 16px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
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

const FixedPosition = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${HEADER_HEIGHT};
  z-index: 1;
  width: 100%;
  max-width: ${TABLET_MIN_WIDTH};
  text-align: right;
`

export const IconImg = styled.img`
  width: 20px;
  height: 20px;
  margin: 0;
`

export const StartImg = styled.img`
  width: 500px;
  height: 500px;
  margin: 0 8px 0 8px;
`

function HomePage() {
  const { data, data2 } = useContext(GlobalContext)

  return (
    <PageHead>
      <FlexContainerBetweenCenter>
        <h1>심리테스트의 저주</h1>
        <FlexContainerAlignCenter>
          <LocationText>
            제이도 날 좋아할까? 그녀의 심리를 알고 싶다면?
            <LocationText>
              나는 타고난 어그로 꾼인가? 당신의 숨겨진 정체를 깨닫고 싶다면?
            </LocationText>
            <LocationText>
              이 말을 가짜라고 생각하고 무시한다면 정말 안 좋은 사고가 꼭 일어납니다.
            </LocationText>
            지금 당장 시작하세요.
          </LocationText>
        </FlexContainerAlignCenter>
      </FlexContainerBetweenCenter>
      <FlexContainerAlignCenter>
        <StartButton>시작하기</StartButton>
      </FlexContainerAlignCenter>
    </PageHead>
  )
}

export default HomePage
