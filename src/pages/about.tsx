import PageHead from 'src/components/layouts/PageHead'
import styled from 'styled-components'
import NavigationLayout from '../components/layouts/NavigationLayout'

const H2 = styled.h2`
  text-align: center;
  margin: 1rem;
`

const Table = styled.table`
  width: 100%;
`

const PaddingCenterTd = styled.td`
  text-align: center;
  padding: 0.5rem;
`

const description = ''

function AboutPage() {
  return (
    <PageHead title="심리테스트 - 팀 소개" description={description}>
      <NavigationLayout>
        <H2>팀 소개</H2>

        <Table>
          <thead>
            <tr>
              <PaddingCenterTd>이름</PaddingCenterTd>
              <PaddingCenterTd>이메일</PaddingCenterTd>
              <PaddingCenterTd>GitHub</PaddingCenterTd>
            </tr>
          </thead>
          <tbody>
            <tr>
              <PaddingCenterTd>곽태욱(팀장)</PaddingCenterTd>
              <PaddingCenterTd>gwak2837@kakao.com</PaddingCenterTd>
              <PaddingCenterTd>
                <a href="https://github.com/rmfpdlxmtidl" target="_blank" rel="noreferrer">
                  @rmfpdlxmtidl
                </a>
              </PaddingCenterTd>
            </tr>
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
        </Table>
      </NavigationLayout>
    </PageHead>
  )
}

export default AboutPage
