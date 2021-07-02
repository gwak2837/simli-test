import { ReactNode } from 'react'
import Image from 'next/image'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { FlexContainerBetweenCenter } from 'src/styles/FlexContainer'
import styled from 'styled-components'
import useSwr from 'swr'
import { BACKEND_URL } from 'src/models/constants'

export const FlexContainerPadding = styled(FlexContainerBetweenCenter)`
  div > a {
    margin: 1rem;
  }

  margin: 1rem;
`

async function fetcher(url: string) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jwt: sessionStorage.getItem('jwt') }),
  })
  return await res.json()
}

type Props = {
  children: ReactNode
  login?: boolean
  register?: boolean
  home?: boolean
}

function NavigationLayout({ children }: Props) {
  const { data, error } = useSwr(`${BACKEND_URL}/me`, fetcher)

  console.log(data)

  return (
    <>
      <FlexContainerPadding>
        <ClientSideLink href="/">
          <Image src="/icon-512.webp" alt="/favicon.ico" width="40" height="40" priority={true} />
        </ClientSideLink>
        {data ? (
          data.name ? (
            <div>
              <ClientSideLink href={`/@${data.name}`}>{data.name}</ClientSideLink>
              <ClientSideLink href="/login">로그아웃</ClientSideLink>
            </div>
          ) : (
            <div>
              <ClientSideLink href="/register">회원가입</ClientSideLink>
              <ClientSideLink href="/login">로그인</ClientSideLink>
            </div>
          )
        ) : error ? (
          '오류'
        ) : (
          '로딩'
        )}
      </FlexContainerPadding>
      {children}
    </>
  )
}

export default NavigationLayout
