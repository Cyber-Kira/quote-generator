const url = 'https://quote-garden.herokuapp.com/api/v3/quotes'

export interface RandomQuoteInterface {
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

export interface PaginationInterface {
	currentPage: number
	nextPage: number
	totalPages: number
}

export interface QuotesDataInterface {
	quoteAuthor: string
	quoteGenre: string
	quoteText: string
	_id: string
}

export interface QuotesInterface {
	data: QuotesDataInterface[]
	pagination: PaginationInterface
	totalQuotes: number
	isLoading: boolean
}

export const fetchQuotes = ({
	author = '',
	genre = '',
	query = '',
	page = 1,
	limit = 5,
}: RandomQuoteInterface): Promise<QuotesInterface> => {
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

const f = async () => {
	console.log(await fetchQuotes({ query: 'life' }))
}

f()
