import React, { ReactNode } from 'react'
import { Container } from 'reactstrap'
import './Main.scss'
interface Props {
  children: ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <main className='main'>
      <Container>{children}</Container>
    </main>
  )
}

export default Main
