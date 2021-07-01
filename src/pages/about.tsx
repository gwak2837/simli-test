import ClientSideLink from 'src/components/atoms/ClientSideLink'
import PageHead from 'src/components/layouts/PageHead'
import styled from 'styled-components'
import { FlexContainerBetweenCenter } from './tests/[name]'

const PaddingCenterTd = styled.td`
  text-align: center;
  padding: 0.5rem;
`

const description = ''

function AboutPage() {
  return (
    <PageHead title="심리테스트 - 팀 소개" description={description}>
      <FlexContainerBetweenCenter>
        <h2>팀 소개</h2>
        <ClientSideLink href="/">
          <div>홈으로 가기</div>
        </ClientSideLink>
      </FlexContainerBetweenCenter>
      <table>
        <thead>
          <tr>
            <PaddingCenterTd>이름</PaddingCenterTd>
            <PaddingCenterTd>이메일</PaddingCenterTd>
            <PaddingCenterTd>GitHub</PaddingCenterTd>
          </tr>
        </thead>
        <tbody>
          <tr>
            <PaddingCenterTd>강신우</PaddingCenterTd>
            <PaddingCenterTd>birdhk71@gmail.com</PaddingCenterTd>
            <PaddingCenterTd>
              <a href="https://github.com/birdhk71" target="_blank" rel="noreferrer">
                @birdhk71
              </a>
            </PaddingCenterTd>
          </tr>
          <tr>
            <PaddingCenterTd>곽태욱</PaddingCenterTd>
            <PaddingCenterTd>gwak2837@kakao.com</PaddingCenterTd>
            <PaddingCenterTd>
              <a href="https://github.com/rmfpdlxmtidl" target="_blank" rel="noreferrer">
                @rmfpdlxmtidl
              </a>
            </PaddingCenterTd>
          </tr>
          <tr>
            <PaddingCenterTd>박건도</PaddingCenterTd>
            <PaddingCenterTd>gundokki@gmail.com</PaddingCenterTd>
            <PaddingCenterTd>
              <a href="https://github.com/gundopark-123" target="_blank" rel="noreferrer">
                @gundopark-123
              </a>
            </PaddingCenterTd>
          </tr>
          <tr>
            <PaddingCenterTd>안윤기</PaddingCenterTd>
            <PaddingCenterTd>yg1700@naver.com</PaddingCenterTd>
            <PaddingCenterTd>
              <a href="https://github.com/ahnyoonki" target="_blank" rel="noreferrer">
                @ahnyoonki
              </a>
            </PaddingCenterTd>
          </tr>
        </tbody>
      </table>
    </PageHead>
  )
}

export default AboutPage
