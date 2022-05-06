/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface QuoteStateInterface {
	id: string
	content: string
	author: string
}

const initialState: QuoteStateInterface = {
	id: 'Ivakj239vnj',
	content: 'A random quote',
	author: 'Kirill',
}

export const quoteSlice = createSlice({
	name: 'quote',
	initialState,
	reducers: {},
})
