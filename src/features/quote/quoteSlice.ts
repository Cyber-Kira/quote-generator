/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchRandomQuote } from './quoteAPI'

export interface QuoteStateInterface {
	id: string
	content: string
	author: string
	genre: string
	isLoading: boolean
}

const initialState: QuoteStateInterface = {
	id: '',
	content: '',
	author: '',
	genre: '',
	isLoading: true,
}

export const getRandomQuote = createAsyncThunk(
	'counter/getRandomQuote',
	async () => {
		const response = await fetchRandomQuote()
		// The value we return becomes the `fulfilled` action payload
		return response
	}
)

export const quoteSlice = createSlice({
	name: 'quote',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getRandomQuote.pending, state => {
				state.isLoading = true
			})
			.addCase(getRandomQuote.fulfilled, (state, { payload }) => {
				const quoteObj = payload.data[0]
				state.isLoading = false
				state.id = quoteObj._id
				state.content = quoteObj.quoteText
				state.author = quoteObj.quoteAuthor
				state.genre = quoteObj.quoteGenre
			})
			.addCase(getRandomQuote.rejected, state => {
				state.isLoading = false
			})
	},
})
