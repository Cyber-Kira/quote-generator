/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GenresInterface, fetchGenres } from '../quote/quoteAPI'

const initialState: GenresInterface = {
	data: [],
	isLoading: false,
}

export const getGenres = createAsyncThunk('genres/getGenres', async () => {
	const response = await fetchGenres()
	return response
})
export const genresSlice = createSlice({
	name: 'quotes',
	initialState,
	reducers: {
		clearGenres: state => {
			state.data = []
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getGenres.pending, state => {
				state.isLoading = true
			})
			.addCase(getGenres.fulfilled, (state, { payload }) => {
				state.data = payload.data
				state.isLoading = false
			})
			.addCase(getGenres.rejected, state => {
				state.isLoading = false
			})
	},
})

export const { clearGenres } = genresSlice.actions
