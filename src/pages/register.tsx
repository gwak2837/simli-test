import styled from 'styled-components'
import useGoToPage from 'src/hooks/useGoToPage'
import { PrimaryButton } from 'src/components/atoms/Button'

const Container = styled.form`
  margin-top: 50px;
  padding: 20px;
`

const Register = styled.h3`
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

function RegisterPage() {
  const goToLoginPage = useGoToPage('/')

  return (
    <Container action="express backend address">
      <Register>회원가입</Register>
      <Register>ID</Register>
      <Input id="id" name="id" placeholder="아이디를 입력해주세요" />
      <Register>PassWord</Register>
      <Input id="password" name="password" type="password" placeholder="비밀번호를 입력해주세요" />
      <Register>Name</Register>
      <Input id="Name" name="Name" type="Name" placeholder="이름을 입력해주세요" />
      <Register>Phone</Register>
      <Input id="Phone" name="Phone" type="Phone" placeholder="전화번호를 입력해주세요" />
      <Register>Date of birth </Register>
      <Input
        id="Datebirth"
        name="Datebirth"
        type="Datebirth"
        placeholder="생년월일을 입력해주세요"
      />
      <Register>Address</Register>
      <Input id="Address" name="Address" type="Address" placeholder="주소를 입력해주세요" />

      <PrimaryButton onClick={goToLoginPage}>회원가입 완료!</PrimaryButton>
    </Container>
  )
}

export default RegisterPage
