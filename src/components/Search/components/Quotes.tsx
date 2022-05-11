/* eslint-disable no-underscore-dangle */
import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import { Quote } from '../../Quote/Quote'

export const Quotes = () => {
	const { data, isLoading } = useAppSelector(store => store.quotes)

	const quotes = data.map(item => (
		<Quote
			content={item.quoteText}
			author={item.quoteAuthor}
			genre={item.quoteGenre}
			isLoading={isLoading}
			key={item._id}
		/>
	))

	const quotesSkeleton = (
		<>
			<div className='flex gap-8 md:gap-24 max-w-quote'>
				<div className='h-44 w-2 bg-slate-300 animate-pulse' />
				<div className='w-full bg-slate-300 animate-pulse rounded' />
			</div>
			<div className='flex gap-8 md:gap-24 max-w-quote'>
				<div className='h-44 w-2 bg-slate-300 animate-pulse' />
				<div className='w-full bg-slate-300 animate-pulse rounded' />
			</div>
			<div className='flex gap-8 md:gap-24 max-w-quote'>
				<div className='h-44 w-2 bg-slate-300 animate-pulse' />
				<div className='w-full bg-slate-300 animate-pulse rounded' />
			</div>
			<div className='flex gap-8 md:gap-24 max-w-quote'>
				<div className='h-44 w-2 bg-slate-300 animate-pulse' />
				<div className='w-full bg-slate-300 animate-pulse rounded' />
			</div>
			<div className='flex gap-8 md:gap-24 max-w-quote'>
				<div className='h-44 w-2 bg-slate-300 animate-pulse' />
				<div className='w-full bg-slate-300 animate-pulse rounded' />
			</div>
		</>
	)

	return (
		<div className='flex flex-col gap-16 mt-12'>
			{isLoading ? quotesSkeleton : quotes}
		</div>
	)
}
