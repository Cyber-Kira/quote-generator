import React from 'react'

export const AuthorCardSkeleton = () => (
	<div className='px-8 py-12 bg-slate-200 animate-pulse w-full max-w-author'>
		<div className='h-5 w-48 bg-slate-300 animate-pulse rounded' />
		<div className='h-3 w-24 mt-2 bg-slate-300 animate-pulse rounded' />
	</div>
)
