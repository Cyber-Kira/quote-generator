import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getRandomQuote } from '../../features/quote/randomQuoteSlice'
import { AuthorCard } from '../AuthorCard/AuthorCard'
import { Quote } from '../Quote/Quote'
import { AuthorCardWrapper } from './components/AuthorCardWrapper'
import { RandomQuoteWrapper } from './components/RandomQuoteWrapper'

export const RandomQuote = () => {
	const { content, isLoading, author, genre } = useAppSelector(
		store => store.randomQuote
	)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getRandomQuote())
	}, [])

	return (
		<div className='m-auto w-full h-withHeader flex flex-col justify-center'>
			<RandomQuoteWrapper>
				<Quote content={content} isLoading={isLoading} />
			</RandomQuoteWrapper>
			<AuthorCardWrapper>
				<AuthorCard isLoading={isLoading} author={author} genre={genre} />
			</AuthorCardWrapper>
		</div>
	)
}
