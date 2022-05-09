import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { quotesSlice } from '../features/quotes/quotesSlice'
import { randomQuoteSlice } from '../features/quote/randomQuoteSlice'

export const store = configureStore({
	reducer: {
		randomQuote: randomQuoteSlice.reducer,
		quotes: quotesSlice.reducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
