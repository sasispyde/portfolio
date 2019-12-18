import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../css/skills.css'

function Skills(props){
	return(
		<>
		<div className="container wrap">
			<div className="wrap">
				<div className="row">
					<div className="col-4">
						<CircularProgressbar value={100} text={`${100}%`} />
						<center>Lorem</center>	
					</div>
					<div className="col-4">
						<CircularProgressbar value={100} text={`${100}%`} />
						<center>Lorem</center>	
					</div>
					<div className="col-4">
						<CircularProgressbar value={100} text={`${100}%`} />
						<center>Lorem</center>	
					</div>
					<div className="col-4">
						<CircularProgressbar value={100} text={`${100}%`} />
						<center>Lorem</center>	
					</div>
					<div className="col-4">
						<CircularProgressbar value={100} text={`${100}%`} />
						<center>Lorem</center>	
					</div>
					<div className="col-4">
						<CircularProgressbar value={100} text={`${100}%`} />
						<center>Lorem</center>	
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default Skills;
