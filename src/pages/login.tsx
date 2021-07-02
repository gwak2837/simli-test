import { Input } from 'antd'
import styled from 'styled-components'
import { PrimaryButton } from 'src/components/atoms/Button'
import { Padding } from 'src/components/atoms/Styles'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { Controller, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FlexContainerBetweenCenter } from 'src/styles/FlexContainer'
import { BACKEND_URL } from 'src/models/constants'
import PageHead from '../components/layouts/PageHead'
import NavigationLayout from '../components/layouts/NavigationLayout'

export const FlexContainerPadding = styled(FlexContainerBetweenCenter)`
  h3,
  a {
    padding: 1rem;
  }
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

const description = '심리테스트 로그인 해봐요'

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

    try {
      const response = await fetch(`${BACKEND_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()
      sessionStorage.setItem('jwt', data.jwt)
    } catch (error) {
      console.error(error)
    }

    setIsLoginLoading(false)

    router.push('/')
  }

  return (
    <PageHead title="심리테스트 - 로그인" description={description}>
      <NavigationLayout>
        <Padding>
          <GridContainerForm onSubmit={handleSubmit(login)}>
            <div>
              <label htmlFor="email">Email</label>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Input
                    disabled={isLoginLoading}
                    required
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
                    required
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
        </Padding>
      </NavigationLayout>
    </PageHead>
  )
}

export default LoginPage
