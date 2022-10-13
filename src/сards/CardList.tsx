import React, { FC } from 'react'
import { useAppDispatch } from '../store/hooks'
import { openCardOne, openCardTwo } from '../reducers/cardReducer'
import CardItem from './CardItem'
import { CardType } from '../types/CardType'

interface CardListProps {
  CardOne: CardType[]
  CardTwo: CardType[]
}

const CardList: FC<CardListProps> = ({ CardOne, CardTwo }) => {
  const dispatch = useAppDispatch()
  const openOneUser = (item: CardType, id: number) => {
    dispatch(openCardOne({ card: item, id: id }))
  }
  const openTwoUser = (item: CardType, id: number) => {
    dispatch(openCardTwo({ card: item, id: id }))
  }
  return (
    <div className='flex space-x-4 mt-6 w-9/12 '>
      <div className='grid grid-cols-4 gap-4'>
        {CardOne.map((item) => (
          <div key={item.id} className=' space-x-4  space-y-4'>
            <CardItem card={item} open={openOneUser} />
          </div>
        ))}
      </div>

      <div className=' grid grid-cols-4 gap-4 '>
        {CardTwo.map((item) => (
          <div key={item.id} className='space-x-4  space-y-4'>
            <CardItem card={item} open={openTwoUser} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardList
