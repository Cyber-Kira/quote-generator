/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

interface FormInterface {
	author?: string
	genre?: string
	query?: string
}

const initialState: FormInterface = {
	author: '',
	genre: '',
	query: '',
}

export const formSlice = createSlice({
	name: 'quotes',
	initialState,
	reducers: {
		setAuthor: (state, { payload }) => {
			state.author = payload
		},
		setGenre: (state, { payload }) => {
			state.genre = payload
		},
		setQuery: (state, { payload }) => {
			state.query = payload
		},
		clearQuery: (state, { payload }) => {
			state.query = ''
		},
	},
})

export const { setAuthor, setGenre, setQuery, clearQuery } = formSlice.actions
