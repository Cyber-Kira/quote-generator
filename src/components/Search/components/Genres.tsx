/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react'
import { Autocomplete, CircularProgress, TextField } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { clearGenres, getGenres } from '../../../features/genres/genresSlice'
import { setGenre } from '../../../features/form/formSlice'

export const Genres = () => {
	const [open, setOpen] = useState(false)
	const { data, isLoading } = useAppSelector(store => store.genres)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (open) {
			dispatch(getGenres())
		} else {
			dispatch(clearGenres())
		}
	}, [open])

	const handleChange = (inputValue: string | null) => {
		dispatch(setGenre(inputValue))
	}

	return (
		<div className='flex flex-col gap-4 max-w-quote mx-auto w-full mt-5 bg-slate-100'>
			<Autocomplete
				id='genres'
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
						label='Genres'
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
