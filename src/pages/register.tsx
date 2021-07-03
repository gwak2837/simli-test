import { Input } from 'antd'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { Padding } from 'src/components/atoms/Styles'
import { GridContainerForm, PrimaryButtonWidth100 } from './login'
import router from 'next/router'
import { BACKEND_URL } from 'src/models/constants'
import PageHead from '../components/layouts/PageHead'
import NavigationLayout from '../components/layouts/NavigationLayout'

const description = '심리테스트에 회원가입해요'

type RegisterForm = {
  email: string
  password: string
  name: string
  phoneNumber: string
  birth: string
  address: string
}

function RegisterPage() {
  const [isRegisterLoading, setIsRegisterLoading] = useState(false)

  const { control, handleSubmit } = useForm<RegisterForm>({
    defaultValues: { email: '', password: '', name: '', phoneNumber: '', birth: '', address: '' },
  })

  async function register({ email, password, name, phoneNumber, birth, address }: RegisterForm) {
    setIsRegisterLoading(true)

    try {
      const response = await fetch(`${BACKEND_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name, phoneNumber, birth, address }),
      })
      const data = await response.json()
      setIsRegisterLoading(false)

      if (data.jwt) {
        sessionStorage.setItem('jwt', data.jwt)
        router.push('/')
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <PageHead title="심리테스트 - 로그인" description={description}>
      <NavigationLayout>
        <Padding>
          <GridContainerForm onSubmit={handleSubmit(register)}>
            <div>
              <label htmlFor="email">Email</label>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Input
                    disabled={isRegisterLoading}
                    placeholder="아이디를 입력해주세요"
                    required
                    size="large"
                    type="email"
                    {...field}
                  />
                )}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <Input
                    disabled={isRegisterLoading}
                    placeholder="비밀번호를 입력해주세요"
                    required
                    size="large"
                    type="password"
                    {...field}
                  />
                )}
              />
            </div>

            <div>
              <label htmlFor="name">Name</label>
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <Input
                    disabled={isRegisterLoading}
                    placeholder="이름을 입력해주세요"
                    required
                    size="large"
                    {...field}
                  />
                )}
              />
            </div>

            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <Controller
                control={control}
                name="phoneNumber"
                render={({ field }) => (
                  <Input
                    disabled={isRegisterLoading}
                    placeholder="전화번호를 입력해주세요"
                    size="large"
                    type="tel"
                    {...field}
                  />
                )}
              />
            </div>

            <div>
              <label htmlFor="birth">Date of Birth</label>
              <Controller
                control={control}
                name="birth"
                render={({ field }) => (
                  <Input
                    disabled={isRegisterLoading}
                    placeholder="생년월일을 입력해주세요"
                    size="large"
                    type="date"
                    {...field}
                  />
                )}
              />
            </div>

            <div>
              <label htmlFor="address">Address</label>
              <Controller
                control={control}
                name="address"
                render={({ field }) => (
                  <Input
                    disabled={isRegisterLoading}
                    placeholder="주소를 입력해주세요"
                    size="large"
                    {...field}
                  />
                )}
              />
            </div>

            <PrimaryButtonWidth100 loading={isRegisterLoading} htmlType="submit">
              회원가입
            </PrimaryButtonWidth100>
            <ClientSideLink href="/login">로그인</ClientSideLink>
          </GridContainerForm>
        </Padding>
      </NavigationLayout>
    </PageHead>
  )
}

export default RegisterPage
