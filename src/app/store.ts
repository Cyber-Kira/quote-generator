import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { formSlice } from '../features/form/formSlice'
import { authorsSlice } from '../features/authors/authorsSlice'
import { quotesSlice } from '../features/quotes/quotesSlice'
import { randomQuoteSlice } from '../features/quote/randomQuoteSlice'
import { genresSlice } from '../features/genres/genresSlice'

export const store = configureStore({
	reducer: {
		randomQuote: randomQuoteSlice.reducer,
		quotes: quotesSlice.reducer,
		authors: authorsSlice.reducer,
		genres: genresSlice.reducer,
		form: formSlice.reducer,
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
