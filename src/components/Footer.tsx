import styled from 'styled-components'
import Image from 'next/image'
import ClientSideLink from './atoms/ClientSideLink'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4rem 1fr;
  align-items: center;
`

const Line = styled.div`
  margin: 1rem;
  border: 0.5px solid black;
`

const anchorStyle = {
  color: '#400000',
}

const GridContainerGap = styled.div`
  display: grid;
  gap: 1rem;

  padding: 1rem;
  font-size: 0.8rem;
  color: #6c6c6c;
`

function Footer() {
  return (
    <footer>
      <GridContainer>
        <Line />
        <div style={{ textAlign: 'center' }}>
          <Image src="/favicon.ico" alt="logo" width={128} height={128} />
        </div>
        <Line />
      </GridContainer>
      <GridContainerGap>
        <h3>Copyright © {new Date().getUTCFullYear()} 아마존의 눈물, Inc. All rights reserved.</h3>
        <h4>
          자주 묻는 질문 |{' '}
          <ClientSideLink href="/documents/terms-of-service" style={anchorStyle}>
            이용약관
          </ClientSideLink>{' '}
          |{' '}
          <ClientSideLink href="/documents/privacy-policy" style={anchorStyle}>
            개인정보처리방침
          </ClientSideLink>
        </h4>
        <div>
          <div>
            <b>(주) 아마존의 눈물 (대표 : 곽태욱)</b>
          </div>
          <div>
            <b>사업자등록번호 :</b> XXX-XX-XXXXX <button>사업자정보확인</button>
          </div>
          <div>
            <b>통신판매업신고 </b>: 제 20XX-서울XX-XXXXX호
          </div>
          <div>
            <b>주소 :</b> 서울특별시 서초구 서초중앙로20길 23
          </div>
          <div>
            <b>E-mail :</b> gwak2837@kakao.com
          </div>
          <div>
            <b>고객센터 :</b> 010-9203-2837
          </div>
          <div>평일 09~18시 (점심시간 12~13시), 주말/공휴일 휴무</div>
        </div>
      </GridContainerGap>
    </footer>
  )
}

export default Footer
