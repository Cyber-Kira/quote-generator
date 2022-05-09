import React from 'react'
import { Link } from 'react-router-dom'
import img from './assets/Scarecrow.png'

export const NotFound = () => {
	return (
		<main>
			<div className='px-6 md:flex md:justify-around md:items-start md:mt-48'>
				<img
					className='w-full max-w-lg px-5 mt-16 mb-14 md:w-2/5'
					src={img}
					alt='A drawed scarecrow'
				/>
				<div className='w-full md:w-2/5'>
					<h1 className='font-mono font-bold text-5xl text-gray-800 leading-[71px] w-[calc(100% + 1.5rem)] mb-7 md:text-7xl'>
						I have bad news for you
					</h1>
					<p className='font-mono text-2xl text-gray-800 font-normal mt-12'>
						The page you are looking for might be removed or is temporarily
						unavailable
					</p>
					<Link
						to='/'
						className='flex justify-center items-center bg-gray-700 text-sm font-mono text-white w-52 uppercase font-bold h-16 mb-16 mt-12 transition-all hover:-translate-y-1 hover:cursor-pointer focus:translate-y-1'
					>
						Back to homepage
					</Link>
				</div>
			</div>
		</main>
	)
}
