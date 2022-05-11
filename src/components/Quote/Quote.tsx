/* eslint-disable react/require-default-props */
import React from 'react'
import { Chip } from '@mui/material'
import { QuoteSkeleton } from '../../lib/components/QuoteSkeleton'
import { randomColor } from '../../lib/utils'

interface Props {
	content: string
	author?: string
	genre?: string
	isLoading: boolean
}

export const Quote = ({ content, author, genre, isLoading }: Props) => {
	const randomQuoteElement = (
		<div>
			{author ? (
				<span className='inline-block font-raleway text-3xl font-bold mb-6 pl-6'>
					{author}
				</span>
			) : null}
			<article className='flex gap-8 md:gap-24 max-w-quote'>
				<div
					className='h-auto w-2'
					style={{ backgroundColor: `${randomColor()}` }}
				/>
				<p className='w-full font-raleway text-2xl md:text-4xl md:leading-[43px] font-medium'>
					&quot;{content}&quot;
				</p>
			</article>
			{genre ? (
				<div className='mt-1 text-right'>
					<Chip label={genre} variant='filled' color='info' />
				</div>
			) : null}
		</div>
	)

	return isLoading ? <QuoteSkeleton /> : randomQuoteElement
}
