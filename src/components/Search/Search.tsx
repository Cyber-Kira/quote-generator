/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react'
import { Button, Pagination } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getQuotes } from '../../features/quotes/quotesSlice'
import { Authors } from './components/Authors'
import { Genres } from './components/Genres'
import { Query } from './components/Query'
import { Quotes } from './components/Quotes'

export const Search = () => {
	const { pagination } = useAppSelector(store => store.quotes)
	const { genre, author, query } = useAppSelector(store => store.form)
	const dispatch = useAppDispatch()

	const handleChange = (
		event: React.FormEvent<HTMLFormElement> | React.ChangeEvent<unknown>,
		value?: number
	) => {
		event.preventDefault()
		if (value) {
			dispatch(
				getQuotes({ author, genre, query, page: value, limit: Number(20) })
			)
		} else {
			dispatch(getQuotes({ author, genre, query, limit: Number(20) }))
		}
	}

	useEffect(() => {
		dispatch(getQuotes({ author: '', genre: '', query: '', limit: Number(20) }))
	}, [])

	return (
		<div className='flex flex-col max-w-quote mx-auto w-full mt-5'>
			<form
				className='flex flex-col md:flex-row gap-4 w-full'
				onSubmit={handleChange}
			>
				<Query />
				<Authors />
				<Genres />
				<Button
					type='submit'
					className='flex-shrink-0'
					disableElevation
					variant='contained'
					endIcon={<span className='material-symbols-outlined'>search</span>}
				>
					Search
				</Button>
			</form>
			<div className='flex justify-center mt-2'>
				<Pagination
					className='my-3'
					color='primary'
					count={pagination.totalPages}
					page={pagination.currentPage}
					onChange={(_event, value) => handleChange(_event, value)}
				/>
			</div>
			<Quotes />
		</div>
	)
}
