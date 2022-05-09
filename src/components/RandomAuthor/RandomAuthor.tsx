/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from '@mui/material'
import Pagination from '@mui/material/Pagination'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getQuotes } from '../../features/quotes/quotesSlice'
import { QuotesList } from './components/QuotesList'

export const RandomAuthor = () => {
	const [limit, setLimit] = useState('5')
	const { authorId } = useParams()
	const { data, isLoading, pagination, totalQuotes } = useAppSelector(
		store => store.quotes
	)
	const dispatch = useAppDispatch()

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		if (pagination.currentPage === value) {
			return
		}
		dispatch(getQuotes({ author: authorId, page: value, limit: Number(limit) }))
	}

	const handleControlChange = (event: SelectChangeEvent) => {
		setLimit(event.target.value as string)
	}

	useEffect(() => {
		dispatch(getQuotes({ author: authorId, limit: Number(limit) }))
	}, [])

	useEffect(() => {
		dispatch(getQuotes({ author: authorId, limit: Number(limit) }))
	}, [limit])

	return (
		<div className='flex flex-col gap-4 max-w-quote mx-auto w-full mt-5'>
			<p className='font-raleway font-bold text-4xl px-9 md:pl-24'>
				{authorId}
			</p>
			<div className='flex flex-wrap items-center justify-between w-full border-t-2 border-b-2 py-1'>
				<Pagination
					className='my-3'
					color='primary'
					count={pagination.totalPages}
					page={pagination.currentPage}
					onChange={handleChange}
				/>
				<div className='my-3'>
					<FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
						<InputLabel id='quotes-per-page-select'>Per page</InputLabel>
						<Select
							labelId='quotes-per-page-select'
							label='Per page'
							value={limit}
							onChange={handleControlChange}
						>
							<MenuItem value={5}>5</MenuItem>
							<MenuItem value={15}>15</MenuItem>
							<MenuItem value={30}>30</MenuItem>
							<MenuItem value={totalQuotes}>All</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
			<QuotesList data={data} isLoading={isLoading} />
		</div>
	)
}
