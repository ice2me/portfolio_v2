import React, { Component } from 'react'
import './Main.css'
import Slogan from '../Slogan/Slogan'
import Projects from '../Projects/Projects'
import AboutMe from '../AboutMe/AboutMe'
import SloganTwo from '../SloganTwo/SloganTwo'

export default class Main extends Component {
	render() {
		return (
			<div>
				<Slogan/>
				<Projects/>
				<AboutMe/>
				<SloganTwo/>
			</div>
		)
	}
}
