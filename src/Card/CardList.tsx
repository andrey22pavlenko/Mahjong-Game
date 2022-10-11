

import React, { FC} from 'react'
import { useAppDispatch } from '../app/hooks'
import { OpenCardOne, OpenCardTwo} from '../app/reducerApp'
import { CardUI } from '../app/types/type'
import CardItem from './CardItem'
interface CardListProps {
    CardOne: CardUI[],
    CardTwo: CardUI[]
}

const  CardList:FC<CardListProps> = ({CardOne,CardTwo}) =>  {
const dispatch = useAppDispatch()
const OpenOneUser = (item: CardUI,id:number) => {
  dispatch(OpenCardOne({card:item,id:id}))
 
}
const OpenTwoUser = (item: CardUI,id:number) => {
  dispatch(OpenCardTwo({card:item,id:id}))
 
}
  return (

  <div className='flex space-x-4 mt-6 w-9/12 '>
  <div className= 'grid grid-cols-4 gap-4'>
  {CardOne.map((item) => (
  <div  key={item.id}  className=' space-x-4  space-y-4' >
  <CardItem card={item} open={OpenOneUser} /> 

    </div>

))}
    </div>

  <div className= ' grid grid-cols-4 gap-4 '>
  {CardTwo.map((item) => (
  <div key={item.id} className='space-x-4  space-y-4' >
  <CardItem card={item} open={OpenTwoUser} /> 
</div>
))}
</div>
</div>
  )
}

export default CardList