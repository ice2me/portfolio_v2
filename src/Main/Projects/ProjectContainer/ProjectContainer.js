import React from 'react'
import './ProjectContainer.css'

export default (props) => (
	<div className="projects__box">
		<a href={props.link} target='_blank' className='projects__box-name'>{props.name}</a>
		<span className='projects__box-title'>{props.title}</span>
		<a href={props.link} target='_blank' className='projects__box-link'>
			<span>See more</span>
		</a>
	</div>
)
