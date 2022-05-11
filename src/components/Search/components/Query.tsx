/* eslint-disable react/jsx-props-no-spreading */
import { TextField } from '@mui/material'
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { setQuery } from '../../../features/form/formSlice'

export const Query = () => {
	const { query } = useAppSelector(store => store.form)
	const dispatch = useAppDispatch()

	const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setQuery(event.target.value))
	}

	return (
		<div className='flex flex-col max-w-quote mx-auto w-full bg-slate-100'>
			<TextField
				value={query}
				onChange={handleChange()}
				id='query-string'
				label='Query'
			/>
		</div>
	)
}
