import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { getRandomQuote } from './features/quote/quoteSlice'

const App = () => {
	const { content, isLoading, author, genre } = useAppSelector(
		store => store.quote
	)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getRandomQuote())
	}, [])

	const quoteSkeleton = <div>Loading...</div>

	const randomQuote = (
		<>
			<div>Quote: {content}</div>
			<div>Author: {author}</div>
			<div>Genre: {genre}</div>
		</>
	)

	return (
		<div className='container md:mx-auto md:max-w-3xl'>
			<header>
				<button
					onClick={() => dispatch(getRandomQuote())}
					type='button'
					className='bg-cyan-300 py-1 px-2 rounded-lg m-12'
				>
					Random Quote
				</button>
			</header>
			<main>{isLoading ? quoteSkeleton : randomQuote}</main>
		</div>
	)
}

export default App
