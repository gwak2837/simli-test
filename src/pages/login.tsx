import { Input } from 'antd'
import styled from 'styled-components'
import { PrimaryButton } from 'src/components/atoms/Button'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { Controller, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Container = styled.div`
  margin-top: 100px;
  padding: 1rem;
`

export const GridContainerForm = styled.form`
  display: grid;
  gap: 1rem;

  a {
    text-align: center;
  }
`

export const PrimaryButtonWidth100 = styled(PrimaryButton)`
  width: 100%;
`

const LogIn = styled.h3`
  margin: 16px 2px 16px 16px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
`

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? ''

type LoginForm = {
  email: string
  password: string
}

function LoginPage() {
  const router = useRouter()
  const [isLoginLoading, setIsLoginLoading] = useState(false)

  const { control, handleSubmit } = useForm<LoginForm>({
    defaultValues: { email: '', password: '' },
  })

  async function login({ email, password }: LoginForm) {
    setIsLoginLoading(true)

    const response = await fetch(`${backendUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()

    setIsLoginLoading(false)

    console.log(data)

    // router.back()
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
              <Input
                disabled={isLoginLoading}
                size="large"
                type="email"
                placeholder="아이디를 입력해주세요"
                {...field}
              />
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
                disabled={isLoginLoading}
                size="large"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                {...field}
              />
            )}
          />
        </div>

        <PrimaryButtonWidth100 loading={isLoginLoading} htmlType="submit">
          로그인
        </PrimaryButtonWidth100>
        <ClientSideLink href="/register">회원가입</ClientSideLink>
      </GridContainerForm>
    </Container>
  )
}

export default LoginPage
