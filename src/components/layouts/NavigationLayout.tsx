import { ReactNode } from 'react'
import { HEADER_HEIGHT } from 'src/models/constants'
import styled from 'styled-components'
import Header from '../Header'

const BackgroundColor = styled.div`
  background-color: #fcfcfc !important;
`
export const Padding = styled.div`
  padding: ${HEADER_HEIGHT} 0 0;
`

type Props = {
  children: ReactNode
}

function NavigationLayout({ children }: Props) {
  return (
    <BackgroundColor>
      {children}
      <Padding />
      <Header />
    </BackgroundColor>
  )
}

export default NavigationLayout
