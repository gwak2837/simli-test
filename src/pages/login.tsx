import { Input } from 'antd'
import styled from 'styled-components'
import useGoToPage from 'src/hooks/useGoToPage'
import { PrimaryButton } from 'src/components/atoms/Button'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { Controller, useForm } from 'react-hook-form'

const Container = styled.div`
  margin-top: 100px;
  padding: 1rem;
`

const GridContainerForm = styled.form`
  display: grid;
  gap: 1rem;

  a {
    text-align: center;
  }
`

const PrimaryButtonWidth100 = styled(PrimaryButton)`
  width: 100%;
`

const LogIn = styled.h3`
  margin: 16px 2px 16px 16px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
`

type LoginForm = {
  email: string
  password: string
}

function LoginPage() {
  const { control, handleSubmit } = useForm<LoginForm>({
    defaultValues: { email: '', password: '' },
  })

  function login({ email, password }: LoginForm) {
    console.log('login', email, password)
  }

  return (
    <Container>
      <LogIn>LOGIN</LogIn>
      <GridContainerForm onSubmit={handleSubmit(login)}>
        <div>
          <label htmlFor="email">Email</label>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input size="large" type="email" placeholder="아이디를 입력해주세요" {...field} />
            )}
          />
        </div>

        <div>
          <label htmlFor="email">Password</label>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input
                size="large"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                {...field}
              />
            )}
          />
        </div>

        <PrimaryButtonWidth100 htmlType="submit">로그인</PrimaryButtonWidth100>
        <ClientSideLink href="/register">회원가입</ClientSideLink>
      </GridContainerForm>
    </Container>
  )
}

export default LoginPage
