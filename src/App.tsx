
import { Button } from '@mui/material';
import React, { FC} from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks';
import {StartGame} from './app/reducerApp';
import CardList from './Card/CardList';



const  App:FC = () =>  {

const CardListOne = useAppSelector(state => state.Card.cardOne)
const CardListTwo = useAppSelector(state => state.Card.cardTwo)

const dispatch = useAppDispatch()




  return (
    <div className='pl-96'>

    <h1 className='text-6xl pl-72 mt-4 font-sans'>Mahjong</h1>

    <div className='mt-4  pl-72'><Button  variant="outlined"  onClick={() => dispatch(StartGame())}>Start Game</Button></div>

    <div className='w-full'>

    <CardList CardOne={CardListOne} CardTwo={CardListTwo}/>

    </div>

    </div>
  )
}

export default App