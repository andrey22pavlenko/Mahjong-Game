import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { startGame } from './reducer/reducerCard'
import CardList from './сard/CardList'

const App: FC = () => {
  const CardListOne = useAppSelector((state) => state.Card.cardOne)
  const CardListTwo = useAppSelector((state) => state.Card.cardTwo)

  const dispatch = useAppDispatch()

  return (
    <div className='pl-96'>
      <h1 className='text-6xl pl-72 mt-4 font-sans'>Mahjong</h1>
      <div className='mt-4  pl-72'>
        <Button variant='outlined' onClick={() => dispatch(startGame())}>
          Start Game
        </Button>
      </div>
      <div className='w-full'>
        <CardList CardOne={CardListOne} CardTwo={CardListTwo} />
      </div>
    </div>
  )
}

export default App
