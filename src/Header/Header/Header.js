import React, { Component } from 'react'
import './Header.css'
import Navigation from '../Navigation/Navigation'


export default class Header extends Component {
	render() {
		return (
			<div id='home'>
				<Navigation/>
				<div className="content">
					<h1 className='content__name'>Hey! I am Serhii.<br/>
					I build interactive websites that run across platforms & devices</h1>
					<div className="container">
						<div className="back side"></div>
						<div className="left side"></div>
						<div className="right side"></div>
						<div className="top side"></div>
						<div className="bottom side"></div>
						<div className="front side"></div>
					</div>
					<div className="container-one">
						<div className="back side"></div>
						<div className="left side"></div>
						<div className="right side"></div>
						<div className="top side"></div>
						<div className="bottom side"></div>
						<div className="front side"></div>
					</div>
					<div className="container-two">
						<div className="back side"></div>
						<div className="left side"></div>
						<div className="right side"></div>
						<div className="top side"></div>
						<div className="bottom side"></div>
						<div className="front side"></div>
					</div>
				</div>
			</div>
		)
	}
}
