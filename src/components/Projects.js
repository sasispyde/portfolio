import React from 'react';
import ListProjects from './list_projects';
import '../css/projects.css';

const exp = [
	{
		project_name : "name",
		title : "title",
		project_description : "project_description",
		git_hub_link : "link",
		thump_image : "images"
	},
	{
		project_name : "name",
		title : "title",
		project_description : "project_description",
		git_hub_link : "link",
		thump_image : "images"
	},
	{
		project_name : "name",
		title : "title",
		project_description : "project_description",
		git_hub_link : "link",
		thump_image : "images"
	},
	{
		project_name : "name",
		title : "title",
		project_description : "project_description",
		git_hub_link : "link",
		thump_image : "images"
	},
	{
		project_name : "name",
		title : "title",
		project_description : "project_description",
		git_hub_link : "link",
		thump_image : "images"
	}
];

function Projects(){
	return(
		<>
		<div className="container">
			<div className="flex-container">
				<ListProjects exp={exp} />
			</div>
		</div>
		</>
	)
}

export default Projects;