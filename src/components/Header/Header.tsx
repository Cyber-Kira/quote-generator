import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getRandomQuote } from '../../features/quote/quoteSlice'

export const Header = () => {
	const { isLoading } = useAppSelector(store => store.quote)
	const dispatch = useAppDispatch()

	return (
		<header className='h-header'>
			<nav className='flex justify-end items-center gap-1 w-full h-full'>
				<button
					onClick={() => dispatch(getRandomQuote())}
					className='px-3 py-2 flex items-center gap-1 font-raleway font-medium text-lg leading-5 text-main'
					type='button'
				>
					random
					<span
						className={`material-symbols-outlined ${
							isLoading ? 'animate-spin' : 'animate-none'
						}`}
					>
						autorenew
					</span>
				</button>
			</nav>
		</header>
	)
}
