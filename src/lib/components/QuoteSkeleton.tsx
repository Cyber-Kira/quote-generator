import React from 'react'

export const QuoteSkeleton = () => (
	<div className='flex gap-8 md:gap-24 max-w-quote'>
		<div className='h-44 w-2 bg-slate-300 animate-pulse' />
		<div className='w-full bg-slate-300 animate-pulse rounded' />
	</div>
)
