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

export const fetchQuotes = ({
	author = '',
	genre = '',
	query = '',
	page = 1,
	limit = 20,
}: QuoteInterface) => {
	const params = new URLSearchParams({
		author,
		genre,
		query,
		page: String(page),
		limit: String(limit),
	})
	return fetch(`${url}?${params}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(response.statusText)
			}
			return response.json()
		})
		.catch(err => err)
}
