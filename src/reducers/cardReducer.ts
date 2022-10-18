import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cardItemType } from '../types/cardItemType'

const NUM = 16

interface stateType {
  cardOne: cardItemType[]
  cardTwo: cardItemType[]
  openCardOne: number
  openCardTwo: number
}

const initialState: stateType = {
  cardOne: [],
  cardTwo: [],
  openCardOne: 0,
  openCardTwo: 0,
}

export const cardReducer = createSlice({
  name: 'reducerApp',
  initialState,

  reducers: {
    startGame: (state) => {
      const nextPrime = (value: number) => {
        if (value > 2) {
          let i, q
          do {
            i = 3
            value += 2
            q = Math.floor(Math.sqrt(value))
            while (i <= q && value % i) {
              i += 2
            }
          } while (i <= q)
          return value
        }
        return value === 2 ? 3 : 2
      }

      let value = 0
      for (let i = 0; i < NUM; i++) {
        value = nextPrime(value)
        const optionCard = { title: value, id: i, open: false }
        state.cardOne.push(optionCard)
        state.cardTwo.push(optionCard)
      }
    },

    openCardOne: (state, action: PayloadAction<{ card: cardItemType; id: number }>) => {
      const card = { ...action.payload.card }
      card.open = !card.open
      state.cardOne[action.payload.id] = card
      card.open ? (state.openCardOne = action.payload.id) : (state.openCardOne = 0)
    },
    openCardTwo: (state, action: PayloadAction<{ card: cardItemType; id: number }>) => {
      const card = { ...action.payload.card }
      card.open = !card.open
      state.cardTwo[action.payload.id] = card
      card.open ? (state.openCardTwo = action.payload.id) : (state.openCardTwo = 0)
    },

    openCards: (state) => {
      const one = state.cardOne[state.openCardOne].title
      const two = state.cardTwo[state.openCardTwo].title

      if (one !== two) {
        state.cardOne[state.openCardOne].open = false
        state.cardTwo[state.openCardTwo].open = false
      }
    },
  },
})

export const { startGame, openCardOne, openCardTwo, openCards } = cardReducer.actions
