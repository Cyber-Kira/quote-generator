import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NotFound } from './components/NotFound/NotFound'
import { RandomAuthor } from './components/RandomAuthor/RandomAuthor'
import { RandomQuote } from './components/RandomQuote/RandomQuote'
import { Search } from './components/Search/Search'
import { SharedLayout } from './components/SharedLayout/SharedLayout'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<RandomQuote />} />
					<Route path='/author/:authorId' element={<RandomAuthor />} />
					<Route path='search' element={<Search />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	)
}

export default App
