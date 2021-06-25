import PageHead from 'src/components/layouts/PageHead'
import styled from 'styled-components'
import Image from 'next/image'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { fadeIn } from 'src/styles/SpecialEffect'
import useSwr from 'swr'
import { CenterPaddingH1 } from './[name]/result'
import { Response } from 'src/pages/api/tests'
import { fetcher } from 'src/utils/commons'

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
  /* grid-template-rows: 1fr 1fr; */

  background: #eee;
`

const description = '테스트 목록을 확인해보세요'

function TestsPage() {
  const { data, error } = useSwr<Response>('/api/tests', fetcher)

  return (
    <PageHead title="심리테스트 - 테스트 목록" description={description}>
      <CenterPaddingH1>원하는 테스트를 골라보세요</CenterPaddingH1>
      <GridContainer>
        {data?.map((test) => (
          <RelativePosition key={test.id}>
            <AbsolutePositionH2>{test.description}</AbsolutePositionH2>
            <ClientSideLink href={`/tests/${test.name.replace(/ /g, '-')}`}>
              <Image
                src={test.imageUrl}
                alt={test.imageUrl}
                width="300"
                height="300"
                objectFit="cover"
              />
            </ClientSideLink>
          </RelativePosition>
        ))}
      </GridContainer>
    </PageHead>
  )
}

export default TestsPage
