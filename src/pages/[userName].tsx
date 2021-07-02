import PageHead from 'src/components/layouts/PageHead'
import styled from 'styled-components'
import Image from 'next/image'
import { Padding } from 'src/components/atoms/Styles'
import { fadeIn } from 'src/styles/SpecialEffect'
import NavigationLayout from 'src/components/layouts/NavigationLayout'

const RelativePosition = styled.div`
  position: relative;
  line-height: 0;
  outline: #ccc solid 1px;

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
const CenterPaddingH1 = styled.h1`
  padding: 3rem 1rem;
  text-align: center;
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

  background: #eee;
`
const ResultDescription = styled.div`
  text-align: center;
  size: 14px;
  background-color: white;
  padding: 1rem 1rem;
`
const description = '내가 지금까지 한 심리 테스트를 볼 수 있어요'

function UserPage() {
  return (
    <PageHead title="심리테스트 - 마이 페이지" description={description}>
      <NavigationLayout>
        <CenterPaddingH1>당신의 테스트 결과 모음</CenterPaddingH1>
        <div>
          <h3>테스트를 다시하고 싶으시다면 위에 있는 분홍색 고양이를 눌러주세요</h3>
        </div>

        <GridContainer>
          <RelativePosition key={1}>
            <AbsolutePositionH2>테스트결과1</AbsolutePositionH2>

            <Image
              src="/mypage-picture/result-workaholic-1-mypage.jpg"
              alt="테스트결과"
              width="300"
              height="300"
              objectFit="cover"
            />
            <ResultDescription>일에 미친 당신</ResultDescription>
          </RelativePosition>
        </GridContainer>
        <Padding />
      </NavigationLayout>
    </PageHead>
  )
}

export default UserPage
