import React, { FC, useEffect } from 'react'
import { useAppDispatch } from '../store/hooks'
import { openCards } from '../reducer/reducerCard'
import { CardUI } from '../type/type'

interface CardItemProps {
  card: CardUI
  open: (item: CardUI, id: number) => void
}
const CardItem: FC<CardItemProps> = ({ card, open }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const time = setTimeout(() => {
      dispatch(openCards())
    }, 1000)
    return () => clearTimeout(time)
  })

  const openItem = () => {
    open(card, card.id)
    card.open = !card.open
  }

  return (
    <div>
      <button
        onClick={() => openItem()}
        className='w-24 h-32 border-2 rounded-lg 
   transition ease-in-out delay-150  hover:-translate-y-1  hover:scale-110  hover:border-red-300  hover:shadow-xl  hover:  duration-300'
      >
        {card.open ? <p className='text-xl'>{card.title}</p> : <></>}
      </button>
    </div>
  )
}

export default CardItem
