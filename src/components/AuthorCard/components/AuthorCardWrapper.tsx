import React from 'react'

export const AuthorCardWrapper = ({
	children,
}: {
	children: React.ReactNode
}) => (
	<div className='mt-14 md:mt-24 pl-2 md:pl-[3rem] mx-auto w-full max-w-author'>
		{children}
	</div>
)
