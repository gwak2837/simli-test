import Link from 'next/link'
import { CSSProperties, ReactNode } from 'react'
import { stopPropagation } from 'src/utils/commons'

type Props = {
  children: ReactNode
  href: string
  style?: CSSProperties
}

function ClientSideLink({ children, href, style }: Props) {
  return (
    <Link href={href}>
      <a href={href} onClick={stopPropagation} style={style}>
        {children}
      </a>
    </Link>
  )
}

export default ClientSideLink
