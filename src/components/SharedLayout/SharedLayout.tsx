import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'

export const SharedLayout = () => {
	return (
		<div className='container px-6 mx-auto md:max-w-7xl md:px-0 h-full'>
			<Header />
			<main className='flex h-withHeader'>
				<Outlet />
			</main>
		</div>
	)
}
