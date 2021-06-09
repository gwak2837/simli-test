import styled from 'styled-components'
import NavigationLayout from '../components/layouts/NavigationLayout'
import PageHead from '../components/layouts/PageHead'
import { useContext } from 'react'
import { FlexContainerBetween, FlexContainerAlignCenter } from 'src/styles/FlexContainer'
import { HEADER_HEIGHT, TABLET_MIN_WIDTH } from 'src/models/constants'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { GlobalContext } from './_app'
import { PrimaryButton, SecondaryButton } from 'src/components/atoms/Button'

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

export const TopIconImg = styled.img`
  width: 22px;
  height: 22px;
  margin: 0 8px 0 8px;
`

function HomePage() {
  const { data, data2 } = useContext(GlobalContext)

  return (
    <PageHead>
      <NavigationLayout>
        <FlexContainerBetweenCenter>
          <FlexContainerAlignCenter>
            <LocationText>서초동</LocationText>
          </FlexContainerAlignCenter>
          <FlexContainerAlignCenter>
            <ClientSideLink href="/users/username/regulars">
              <TopIconImg src="/442@3x.png" />
            </ClientSideLink>
          </FlexContainerAlignCenter>
        </FlexContainerBetweenCenter>

        <PrimaryButton>클릭?</PrimaryButton>
        <SecondaryButton>클릭!</SecondaryButton>
      </NavigationLayout>
    </PageHead>
  )
}

export default HomePage
