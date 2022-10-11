import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardUI } from '../type/type'

const numberCards = 16

interface CardType {
  cardOne: CardUI[]
  cardTwo: CardUI[]
  OpenCardOne: number
  OpenCardTwo: number
}

const initialState: CardType = {
  cardOne: [],
  cardTwo: [],
  OpenCardOne: 0,
  OpenCardTwo: 0,
}

export const reducerCard = createSlice({
  name: 'reducerApp',
  initialState,

  reducers: {
    startGame: (state) => {
      state.cardOne.splice(0, state.cardOne.length)
      state.cardTwo.splice(0, state.cardTwo.length)

      for (let i = 0; i < numberCards; i++) {
        const titleCard = Math.round(Math.random() * 100)
        const optionCard = { title: titleCard, id: i, open: false }
        state.cardOne.push(optionCard)
        state.cardTwo.push(optionCard)
      }
    },
    openCardOne: (state, action: PayloadAction<{ card: CardUI; id: number }>) => {

      const card = { ...action.payload.card }
      card.open = !card.open
      state.cardOne[action.payload.id] = card
      card.open ? (state.OpenCardOne = action.payload.id) : (state.OpenCardOne = 0)
    },
    openCardTwo: (state, action: PayloadAction<{ card: CardUI; id: number }>) => {
        
      const card = { ...action.payload.card }
      card.open = !card.open
      state.cardTwo[action.payload.id] = card
      card.open ? (state.OpenCardTwo = action.payload.id) : (state.OpenCardTwo = 0)
    },

    openCards: (state) => {
      const one = state.cardOne[state.OpenCardOne].title
      const two = state.cardTwo[state.OpenCardTwo].title

      if (one !== two) {
        state.cardOne[state.OpenCardOne].open = false
        state.cardTwo[state.OpenCardTwo].open = false
      }
    },
  },
})

export const { startGame, openCardOne, openCardTwo, openCards } = reducerCard.actions
