import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getRandomQuote } from '../../features/quote/randomQuoteSlice'

export const Header = () => {
	const { isLoading } = useAppSelector(store => store.randomQuote)
	const dispatch = useAppDispatch()

	return (
		<header className='h-header'>
			<nav className='flex justify-end items-center gap-1 w-full h-full'>
				<Link
					className='px-3 py-2 flex items-center font-raleway font-medium text-lg leading-5 text-main hover:text-purple-600 transition-colors'
					to='/'
				>
					home
				</Link>
				<Link
					className='px-3 py-2 flex items-center font-raleway font-medium text-lg leading-5 text-main hover:text-purple-600 transition-colors'
					to='/search'
				>
					search
				</Link>
				<button
					type='button'
					onClick={() => {
						dispatch(getRandomQuote())
					}}
					className='px-3 py-2 flex items-center gap-1 font-raleway font-medium text-lg leading-5 text-main hover:text-purple-600 transition-colors'
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
