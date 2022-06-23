import React, { Component } from 'react'
import './Projects.css'
import ProjectContainer from './ProjectContainer/ProjectContainer'

class Projects extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: {
				'one' : 'Recipes by ingredients',
				'two' : 'ZoomTender',
			},
			title: {
				'one' : 'This app was designed and developed to search for recipes by ingredients',
				'two' : 'This app create tender and allows you to find the contractors'
			},
			link: {
				'one' : 'https://selection-recipe.herokuapp.com/',
				'two' : 'http://134.209.157.41/',
			}
		}
	}
	render() {
		return (
			<div className='projects' id='projects'>
				<p>{'<projects>'}</p>
				<ProjectContainer
					name={this.state.name.one}
					title={this.state.title.one}
					link={this.state.link.one}
				/>
				<ProjectContainer
					name={this.state.name.two}
					title={this.state.title.two}
					link={this.state.link.two}
				/>
				<p>{'<projects>'}</p>
			</div>
		)
	}
}

export default Projects
