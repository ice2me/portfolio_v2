import React, { Component } from 'react'
import './BurgerMenu.css'


export default class BurgerMenu extends Component {
	toggleMenu = () =>{
		let showMenu = document.querySelector('.burger')
		let button = document.querySelector('.burger__button-touch')
		let over = document.querySelector('.over')
		if (showMenu.classList.contains('active')){
			showMenu.classList.remove('active')
			button.classList.remove('open')
			over.classList.remove('close')
		}else{
			showMenu.classList.add('active')
			button.classList.add('open')
			over.classList.add('close')
		}
	}
	render() {
		
		return (
			<div>
			<nav className='burger'>
				<ul className='burger__menu'>
					<li><a className='burger__menu-link' href="#home"><span>Home</span></a></li>
					<li><a className='burger__menu-link' href="#projects"><span>Projects</span></a></li>
					<li><a className='burger__menu-link' href="#about"><span>About</span></a></li>
					<li><a className='burger__menu-link' href="#contacts"><span>Contacts</span></a></li>
				</ul>
				<div className="burger__button" onClick={this.toggleMenu}>
					<span className="burger__button-touch"></span>
				</div>
			</nav>
			<div className="over" onClick={this.toggleMenu}></div>
			</div>
		)
	}
}
