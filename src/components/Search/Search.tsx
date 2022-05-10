/* eslint-disable no-underscore-dangle */
import { Button, TextField } from '@mui/material'
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getQuotes } from '../../features/quotes/quotesSlice'
import { Quote } from '../Quote/Quote'
import { Authors } from './components/Authors'
import { Genres } from './components/Genres'

export const Search = () => {
	const { data, isLoading } = useAppSelector(store => store.quotes)
	const { genre, author, query } = useAppSelector(store => store.form)
	const dispatch = useAppDispatch()

	const handleChange = () => {
		console.log(1)
		dispatch(getQuotes({ author, genre, query, limit: Number(20) }))
	}

	return (
		<div className='flex flex-col gap-4 max-w-quote mx-auto w-full mt-5 bg-slate-100'>
			<form className='flex flex-col gap-4 w-full'>
				<TextField id='query-string' label='Query' defaultValue='' />
				<Authors />
				<Genres />
				<Button
					onClick={() => handleChange()}
					variant='contained'
					endIcon={<span className='material-symbols-outlined'>search</span>}
				>
					Search
				</Button>
			</form>
			<div className='flex flex-col gap-32 my-8'>
				{data.map(item => (
					<Quote
						content={item.quoteText}
						isLoading={isLoading}
						key={item._id}
					/>
				))}
			</div>
		</div>
	)
}
