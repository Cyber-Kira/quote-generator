/* eslint-disable react/jsx-props-no-spreading */
import { IconButton, TextField } from '@mui/material'
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { setQuery } from '../../../features/form/formSlice'

export const Query = () => {
	const { query } = useAppSelector(store => store.form)
	const dispatch = useAppDispatch()

	const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setQuery(event.target.value))
	}

	const inputProps =
		query !== undefined && query.length > 0 ? (
			<IconButton onClick={() => dispatch(setQuery(''))} aria-label='clear'>
				<span className='material-symbols-outlined'>close</span>
			</IconButton>
		) : null

	return (
		<div className='flex flex-col max-w-quote mx-auto w-full'>
			<TextField
				value={query}
				onChange={handleChange()}
				id='query-string'
				label='Query'
				variant='outlined'
				InputProps={{
					endAdornment: inputProps,
				}}
			/>
		</div>
	)
}
