import React, { FC } from 'react'
import { useAppDispatch } from '../store/hooks'
import { openCardOne, openCardTwo } from '../reducers/cardReducer'
import CardItem from './CardItem'
import { cardItemType } from '../types/cardItemType'

interface CardListProps {
  cardOne: cardItemType[]
  cardTwo: cardItemType[]
}

const CardList: FC<CardListProps> = ({ cardOne, cardTwo }) => {
  const dispatch = useAppDispatch()
  const openOneUser = (item: cardItemType, id: number) => {
    dispatch(openCardOne({ card: item, id: id }))
  }
  const openTwoUser = (item: cardItemType, id: number) => {
    dispatch(openCardTwo({ card: item, id: id }))
  }
  return (
    <div className='flex space-x-4 mt-6 w-9/12 '>
      <div className='grid grid-cols-4 gap-4'>
        {cardOne.map((item) => (
          <div key={item.id} className=' space-x-4  space-y-4'>
            <CardItem card={item} open={openOneUser} />
          </div>
        ))}
      </div>

      <div className=' grid grid-cols-4 gap-4 '>
        {cardTwo.map((item) => (
          <div key={item.id} className='space-x-4  space-y-4'>
            <CardItem card={item} open={openTwoUser} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardList
