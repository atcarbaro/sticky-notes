import React from 'react'
import Board from '../../components/Board'
import { HomeContainer, H1 } from './styled'

function Home() {
  return (
    <HomeContainer>
        <H1>Notes</H1>
        <Board />
    </HomeContainer>
  )
}

export default Home