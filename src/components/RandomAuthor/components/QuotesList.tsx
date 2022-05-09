/* eslint-disable no-underscore-dangle */
import React from 'react'
import { QuotesDataInterface } from '../../../features/quote/quoteAPI'
import { Quote } from '../../Quote/Quote'

export const QuotesList = ({
	data,
	isLoading,
}: {
	data: QuotesDataInterface[]
	isLoading: boolean
}) => {
	return (
		<div className='flex flex-col gap-32 my-8'>
			{data.map(item => (
				<Quote content={item.quoteText} isLoading={isLoading} key={item._id} />
			))}
		</div>
	)
}
