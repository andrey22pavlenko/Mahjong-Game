
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardUI } from './types/type';


interface CardType {
    cardOne:CardUI[]
    cardTwo: CardUI[],
    OpenCardOne: number,
    OpenCardTwo: number,
}

const initialState: CardType = {
   cardOne: [],
   cardTwo: [],
   OpenCardOne:0,
   OpenCardTwo:0,
}

export const reducerApp = createSlice({
    name: 'reducerApp',
    initialState,

    reducers: {
        StartGame:(state) => {
            state.cardOne.splice(0,state.cardOne.length);
            state.cardTwo.splice(0,state.cardTwo.length);

            for(let i=0 ; i < 16; i++){

          const titleCard = Math.round(Math.random() * 100);
          const optionCard = {title:titleCard, id:i ,open:false}
          state.cardOne.push(optionCard);
          state.cardTwo.push(optionCard);
           }        
        },

        OpenCardOne:(state, action:PayloadAction<{card:CardUI,id:number}>) => {
            const card = {...action.payload.card}
             card.open= card.open !== true
             state.cardOne[action.payload.id] = card;
            if(card.open === true){
                  state.OpenCardOne = action.payload.id
            } else {
                state.OpenCardOne = 0
            }
        },

        OpenCardTwo:(state, action:PayloadAction<{card:CardUI,id:number}>) => {
             const card = {...action.payload.card}
             card.open = card.open !== true
             state.cardTwo[action.payload.id] = card;
             if(card.open === true){
                state.OpenCardTwo = action.payload.id
             }else {
            state.OpenCardTwo = 0
           }
        },

        OpenCards: (state) => {
          const one = state.cardOne[state.OpenCardOne].title
          const two = state.cardTwo[state.OpenCardTwo].title
             if(one !== two) {
                state.cardOne[state.OpenCardOne].open = false
                state.cardTwo[state.OpenCardTwo].open = false
            }
        },
    }
}) 

export const { StartGame,OpenCardOne,OpenCardTwo,OpenCards } = reducerApp.actions