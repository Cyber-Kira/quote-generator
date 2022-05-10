/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthorsInterface, fetchAuthors, fetchGenres } from '../quote/quoteAPI'

const initialState: AuthorsInterface = {
	data: [],
	isLoading: false,
}

export const getAuthors = createAsyncThunk('quotes/getAuthors', async () => {
	const response = await fetchAuthors()
	return response
})

export const authorsSlice = createSlice({
	name: 'quotes',
	initialState,
	reducers: {
		clearAuthors: state => {
			state.data = []
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getAuthors.pending, state => {
				state.isLoading = true
			})
			.addCase(getAuthors.fulfilled, (state, { payload }) => {
				state.data = payload.data
				state.isLoading = false
			})
			.addCase(getAuthors.rejected, state => {
				state.isLoading = false
			})
	},
})

export const { clearAuthors } = authorsSlice.actions
