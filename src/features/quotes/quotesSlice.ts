/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	fetchQuotes,
	QuotesInterface,
	RandomQuoteInterface,
} from '../quote/quoteAPI'

const initialState: QuotesInterface = {
	data: [],
	pagination: { currentPage: 0, nextPage: 1, totalPages: 2 },
	totalQuotes: 0,
	isLoading: false,
}

export const getQuotes = createAsyncThunk(
	'quotes/getQuotes',
	async ({ author, genre, query, page, limit }: RandomQuoteInterface) => {
		const response = await fetchQuotes({ author, genre, query, page, limit })
		return response
	}
)

export const quotesSlice = createSlice({
	name: 'quotes',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getQuotes.pending, state => {
				state.isLoading = true
			})
			.addCase(getQuotes.fulfilled, (state, { payload }) => {
				state.data = payload.data
				state.pagination = payload.pagination
				state.totalQuotes = payload.totalQuotes
				state.isLoading = false
			})
			.addCase(getQuotes.rejected, state => {
				state.isLoading = false
			})
	},
})
