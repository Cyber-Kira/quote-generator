/* eslint-disable @typescript-eslint/no-unused-vars */
const {
	randomQuote,
	authorQuotes,
	getQuotes,
	searchQuotes,
} = require('quotegarden')

const url = 'https://quote-garden.herokuapp.com/api/v3/quotes'

export interface QuoteInterface {
	author?: string
	genre?: string
	query?: string
	page?: number
	limit?: number
}

export const fetchRandomQuote = () => {
	return fetch(`${url}/random`)
		.then(response => {
			if (!response.ok) {
				throw new Error(response.statusText)
			}
			return response.json()
		})
		.catch(err => err)
}
