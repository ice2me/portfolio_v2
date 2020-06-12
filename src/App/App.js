import React from 'react'
import './App.css'
import Header from '../Header/Header/Header'
import Main from '../Main/Main/Main'
import Footer from '../Footer/Footer'


function App() {
	const anchors = document.querySelectorAll('a[href*="#"]')
	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()
			
			const blockID = anchor.getAttribute('href').substr(1)
			
			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		})
	}
	return (
		<div className="App">
			<Header/>
			<Main/>
			<Footer/>
		</div>
	);
}

export default App