import React from 'react';

function list_projects(props){
	return(
		<>
		{
			props.exp.map(function(data,index){
				return(
				   	<div key={index}>
				   		<ul className="list-unstyled">
				   			<li>{data.thump_image}</li>
				   			<li>{data.project_name}</li>
				   			<li>{data.title}</li>
				   			<li>{data.git_hub_link}</li>
				   			<li>{data.project_description}</li>
				   		</ul>
				    </div>
				)
			})
		}
		</>
	)
}

export default list_projects;