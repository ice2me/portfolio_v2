import React, { Component } from 'react'
import './Projects.css'
import ProjectContainer from './ProjectContainer/ProjectContainer'

class Projects extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: {
				'one' : 'Golden Lion',
				'two' : 'Avenue Fashion',
				'three' : 'Avenue Fashion LocalStores',
				'four' : 'Avenue Fashion LookBook',
				'five' : 'Avenue Fashion Brands',
				'six' : 'Magazine',
				'seven' : 'Wooden',
				'eight' : 'Squro',
				'nine' : 'LifeCell',
				'ten' : 'Business',
				'eleven' : 'Taxi',
				'twelve' : 'Foxtrot',
				'thirteen' : 'FatBike',
			},
			title: {
				'one' : 'My site design for the provision of front end development services',
				'two' : 'An Interactive panoramic HTML5 Catalogue online store main',
				'three' : 'An Interactive panoramic HTML5 Catalogue online store location in three cities',
				'four' : 'An Interactive panoramic HTML5 Catalogue online store lookbook',
				'five' : 'An Interactive panoramic HTML5 Catalogue online store brand history',
				'six' : 'Online street-style clothing and accessories store',
				'seven' : 'Progressively Enhanced website experiance, both on Desktop and Mobile for an Wooden brand',
				'eight' : 'Landing Page brand scuro selling scooters',
				'nine' : 'mobile operator banner for green office from Ukraine',
				'ten' : 'A responsive, feature-rich portfolio website for a technology consulting company.',
				'eleven' : 'A responsive, feature-rich website for a technology taxi company.',
				'twelve' : 'shop banner for Foxtrot from Ukraine',
				'thirteen' : 'An Interactive panoramic HTML5 Catalogue online store main',
			},
			link: {
				'one' : 'http://goldenlion.serhii-zuiev.com.ua/en/index__en.html',
				'two' : 'http://goldenlion.serhii-zuiev.com.ua/portfolio/AvenueFashion/index.html',
				'three' : 'http://goldenlion.serhii-zuiev.com.ua/portfolio/AvenueFashion/LocalStores.html',
				'four' : 'http://goldenlion.serhii-zuiev.com.ua/portfolio/AvenueFashion/LookBook.html',
				'five' : 'http://goldenlion.serhii-zuiev.com.ua/portfolio/AvenueFashion/Brands.html',
				'six' : 'http://goldenlion.serhii-zuiev.com.ua/portfolio/Magazine/index.html',
				'seven' : 'http://goldenlion.serhii-zuiev.com.ua/portfolio/Wooden/index.html',
				'eight' : 'http://goldenlion.serhii-zuiev.com.ua/portfolio/Squro/index.html',
				'nine' : 'http://goldenlion.serhii-zuiev.com.ua/portfolio/LifeCell/index.html',
				'ten' : 'http://goldenlion.serhii-zuiev.com.ua/portfolio/WerstkaWebsiteLanding/index.html',
				'eleven' : 'http://goldenlion.serhii-zuiev.com.ua/portfolio/TAXI/indexKiev.html',
				'twelve' :'http://goldenlion.serhii-zuiev.com.ua/portfolio/Foxtrot/index.html',
				'thirteen' : 'http://goldenlion.serhii-zuiev.com.ua/portfolio/FatBike/index.html',
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
				<ProjectContainer
					name={this.state.name.three}
					title={this.state.title.three}
					link={this.state.link.three}
				/>
				<ProjectContainer
					name={this.state.name.four}
					title={this.state.title.four}
					link={this.state.link.four}
				/>
				<ProjectContainer
					name={this.state.name.five}
					title={this.state.title.five}
					link={this.state.link.five}
				/>
				<ProjectContainer
					name={this.state.name.six}
					title={this.state.title.six}
					link={this.state.link.six}
				/>
				<ProjectContainer
					name={this.state.name.seven}
					title={this.state.title.seven}
					link={this.state.link.seven}
				/>
				<ProjectContainer
					name={this.state.name.eight}
					title={this.state.title.eight}
					link={this.state.link.eight}
				/>
				<ProjectContainer
					name={this.state.name.nine}
					title={this.state.title.nine}
					link={this.state.link.nine}
				/>
				<ProjectContainer
					name={this.state.name.ten}
					title={this.state.title.ten}
					link={this.state.link.ten}
				/>
				<ProjectContainer
					name={this.state.name.eleven}
					title={this.state.title.eleven}
					link={this.state.link.eleven}
				/>
				<ProjectContainer
					name={this.state.name.twelve}
					title={this.state.title.twelve}
					link={this.state.link.twelve}
				/>
				<ProjectContainer
					name={this.state.name.thirteen}
					title={this.state.title.thirteen}
					link={this.state.link.thirteen}
				/>
				<p>{'<projects>'}</p>
			</div>
		)
	}
}

export default Projects
