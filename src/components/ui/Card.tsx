import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
}

function Card({ children }: CardProps) {
  return <section className="ui-card">{children}</section>
}

export default Card