
import React, { FC, useEffect } from 'react'
import { useAppDispatch} from '../app/hooks'
import { OpenCards} from '../app/reducerApp'
import { CardUI } from '../app/types/type'

interface CardItemProps {
  card: CardUI,
  open: (item: CardUI,id:number) => void
 
}
const  CardItem:FC<CardItemProps> = ({card, open}) => {
 
const dispatch = useAppDispatch()

useEffect(() => {
  const time = setTimeout(() => {
    dispatch(OpenCards())
  }, 1000);
  return () => clearTimeout(time);

});

 const OpenItem = () => {
   open(card, card.id)
   card.open = card.open !== true  
  }

  return (
<div>
  <button onClick={() => OpenItem()}  className='w-24 h-32 border-2 rounded-lg 
   transition ease-in-out delay-150  hover:-translate-y-1  hover:scale-110  hover:border-red-300  hover:shadow-xl  hover:  duration-300  '
   >
   {card.open ? <p className='text-xl'>{card.title}</p> : <></>}
</button>
</div>
  )
}

export default CardItem