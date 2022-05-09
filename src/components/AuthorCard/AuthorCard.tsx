import React from 'react'
import { Link } from 'react-router-dom'
import { AuthorCardSkeleton } from '../../lib/components/AuthorCardSkeleton'

interface Props {
	isLoading: boolean
	author: string
	genre: string
}

export const AuthorCard = ({ isLoading, author, genre }: Props) => {
	const authorElement = (
		<article className='w-full max-w-author'>
			<Link
				to={`/author/${author}`}
				className='flex items-center px-8 py-12 hover:bg-[#333333] group transition-colors'
			>
				<div>
					<p className='text-main font-raleway text-2xl leading-7 font-bold group-hover:text-[#F2F2F2]'>
						{author}
					</p>
					<span className='text-[#828282] mt-2 font-raleway font-medium text-sm leading-4'>
						{genre}
					</span>
				</div>
				<span className='material-symbols-outlined pl-4 invisible text-[#F2F2F2] ml-auto group-hover:visible'>
					arrow_right_alt
				</span>
			</Link>
		</article>
	)

	return isLoading ? <AuthorCardSkeleton /> : authorElement
}
