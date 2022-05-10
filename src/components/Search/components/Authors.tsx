/* eslint-disable react/jsx-props-no-spreading */
import { Autocomplete, CircularProgress, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import {
	clearAuthors,
	getAuthors,
} from '../../../features/authors/authorsSlice'
import { setAuthor } from '../../../features/form/formSlice'

export const Authors = () => {
	const [open, setOpen] = React.useState(false)
	const { data, isLoading } = useAppSelector(store => store.authors)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (open) {
			dispatch(getAuthors())
		} else {
			dispatch(clearAuthors())
		}
	}, [open])

	const handleChange = (inputValue: string | null) => {
		dispatch(setAuthor(inputValue))
	}

	return (
		<div className='flex flex-col gap-4 max-w-quote mx-auto w-full mt-5 bg-slate-100'>
			<Autocomplete
				id='authors'
				disableListWrap
				open={open}
				onChange={(_event, inputValue) => handleChange(inputValue)}
				onOpen={() => {
					setOpen(true)
				}}
				onClose={() => {
					setOpen(false)
				}}
				groupBy={item => item[0]}
				options={data}
				loading={isLoading}
				renderInput={params => (
					<TextField
						{...params}
						label='Authors'
						InputProps={{
							...params.InputProps,
							endAdornment: (
								<>
									{isLoading ? (
										<CircularProgress color='inherit' size={20} />
									) : null}
									{params.InputProps.endAdornment}
								</>
							),
						}}
					/>
				)}
			/>
		</div>
	)
}
