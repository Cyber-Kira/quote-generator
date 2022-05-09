import React from 'react'
import { QuoteSkeleton } from '../../lib/components/QuoteSkeleton'
import { randomColor } from '../../lib/utils'

interface Props {
	content: string
	isLoading: boolean
}

export const Quote = ({ content, isLoading }: Props) => {
	const randomQuoteElement = (
		<article className='flex gap-8 md:gap-24 max-w-quote'>
			<div
				className='h-auto w-2'
				style={{ backgroundColor: `${randomColor()}` }}
			/>
			<p className='w-full font-raleway text-2xl md:text-4xl md:leading-[43px] font-medium'>
				&quot;{content}&quot;
			</p>
		</article>
	)

	return isLoading ? <QuoteSkeleton /> : randomQuoteElement
}
