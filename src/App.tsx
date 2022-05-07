import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { AuthorCard } from './components/AuthorCard/AuthorCard'
import { AuthorCardWrapper } from './components/AuthorCard/components/AuthorCardWrapper'
import { Header } from './components/Header/Header'
import { RandomQuoteWrapper } from './components/RandomQuote/components/RandomQuoteWrapper'
import { RandomQuote } from './components/RandomQuote/RandomQuote'
import { getRandomQuote } from './features/quote/quoteSlice'

const App = () => {
	const { isLoading, author, genre } = useAppSelector(store => store.quote)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getRandomQuote())
	}, [])

	return (
		<div className='container px-6 mx-auto md:max-w-7xl md:px-0 h-screen'>
			<Header />
			<main className='flex h-withHeader'>
				<div className='my-auto w-full'>
					<RandomQuoteWrapper>
						<RandomQuote />
					</RandomQuoteWrapper>
					<AuthorCardWrapper>
						<AuthorCard isLoading={isLoading} author={author} genre={genre} />
					</AuthorCardWrapper>
				</div>
			</main>
		</div>
	)
}

export default App
