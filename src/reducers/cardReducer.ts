import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardType } from '../types/CardType'

const NUM = 16

interface Card {
  cardOne: CardType[]
  cardTwo: CardType[]
  OpenCardOne: number
  OpenCardTwo: number
}

const initialState: Card = {
  cardOne: [],
  cardTwo: [],
  OpenCardOne: 0,
  OpenCardTwo: 0,
}

export const cardReducer = createSlice({
  name: 'reducerApp',
  initialState,

  reducers: {
    startGame: (state) => {
      state.cardOne.splice(0, state.cardOne.length)
      state.cardTwo.splice(0, state.cardTwo.length)

      for (let i = 0; i < NUM; i++) {
        const titleCard = Math.round(Math.random() * 100)
        const optionCard = { title: titleCard, id: i, open: false }
        state.cardOne.push(optionCard)
        state.cardTwo.push(optionCard)
      }
    },

    openCardOne: (state, action: PayloadAction<{ card: CardType; id: number }>) => {
      const card = { ...action.payload.card }
      card.open = !card.open
      state.cardOne[action.payload.id] = card
      card.open ? (state.OpenCardOne = action.payload.id) : (state.OpenCardOne = 0)
    },
    openCardTwo: (state, action: PayloadAction<{ card: CardType; id: number }>) => {
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

export const { startGame, openCardOne, openCardTwo, openCards } = cardReducer.actions
