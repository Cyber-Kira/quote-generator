// There is a better way of rendering 11000+ authors into the field.
// I may change it in the future

// TODO: change render method to virtualization with react-window

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
		if (inputValue === null) {
			dispatch(setAuthor([]))
		} else {
			dispatch(setAuthor(inputValue))
		}
	}

	return (
		<div className='flex flex-col max-w-quote mx-auto w-full'>
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
						label='Author'
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
