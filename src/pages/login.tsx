import styled from 'styled-components'
import useGoToPage from 'src/hooks/useGoToPage'
import { PrimaryButton } from 'src/components/atoms/Button'
import ClientSideLink from 'src/components/atoms/ClientSideLink'

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`

const LogIn = styled.h3`
  margin: 16px 2px 16px 16px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
`

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`

function LoginPage() {
  const goToLoginPage = useGoToPage('/')

  return (
    <Container>
      <LogIn>LOGIN1</LogIn>
      <Input id="id" name="id" placeholder="아이디를 입력해주세요" />
      <Input id="password" name="password" type="password" placeholder="비밀번호를 입력해주세요" />
      <PrimaryButton onClick={goToLoginPage}>로그인</PrimaryButton>
      <ClientSideLink href="/register">회원가입</ClientSideLink>
    </Container>
  )
}

export default LoginPage
