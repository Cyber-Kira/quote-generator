const url = 'https://quote-garden.herokuapp.com/api/v3'

export interface RandomQuoteInterface {
	author?: string
	genre?: string
	query?: string
	page?: number
	limit?: number
}

export const fetchRandomQuote = () => {
	return fetch(`${url}/quotes/random`)
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

export interface AuthorsInterface {
	data: string[]
	isLoading: boolean
}

export interface GenresInterface {
	data: string[]
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
	return fetch(`${url}/quotes?${params}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(response.statusText)
			}
			return response.json()
		})
		.catch(err => err)
}

export const fetchAuthors = (): Promise<AuthorsInterface> => {
	return fetch(`${url}/authors`)
		.then(response => {
			if (!response.ok) {
				throw new Error(response.statusText)
			}
			return response.json()
		})
		.catch(err => err)
}

export const fetchGenres = (): Promise<GenresInterface> => {
	return fetch(`${url}/genres`)
		.then(response => {
			if (!response.ok) {
				throw new Error(response.statusText)
			}
			return response.json()
		})
		.catch(err => err)
}
