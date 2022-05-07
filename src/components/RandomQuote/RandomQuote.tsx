import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { RandomQuoteSkeleton } from '../../lib/components/RandomQuoteSkeleton'
import { randomColor } from '../../lib/utils'

export const RandomQuote = () => {
	const { content, isLoading } = useAppSelector(store => store.quote)

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

	return isLoading ? <RandomQuoteSkeleton /> : randomQuoteElement
}
