import React from 'react';
import '../css/contact.css';
import image from '../Assets/images/contact.jpeg';
import {connect} from 'react-redux';
import { setValues } from '../actions/secondaction'

var state = {
	form_value :{
		name:"",
		email:""
	}
}

class Contact extends React.Component {

	constructor(props){
		super(props)	
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event){
		event.preventDefault();
		console.log(this.props.user);
		state = {
			form_value :{
				name:"",
				email:""
			}
		};
		this.props.name(state.form_value); 
	}

	handleChange(event){
		var form_value = state.form_value;
		form_value[event.target.name] = event.target.value;
		this.props.name(state.form_value); 
	}

	render(){
		return(
		<>
		<div className="container">
			<div className="login-wrap">
				<div className="login-html">
					<input id="tab-1" readOnly style={{display:"none"}} type="radio" name="tab" className="sign-in" checked /><label htmlFor="tab-1" id="ss" className="tab tabsss">Contact</label>
					<input id="tab-2" readOnly type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" style={{display:"none"}} className="tab tab2s"></label>
					<div className="login-form">
						<div className="sign-in-htm">
							<form className="from" onSubmit={this.handleSubmit}>
							<div className="group">
								<label htmlFor="user" className="label">Username</label>
								<input id="user" type="text" onChange = {this.handleChange} className="input" name="name" placeholder="Username" title="Name" value={this.props.user.name} /><br/>
							</div>
							<div className="group">
								<label htmlFor="pass" className="label">Email</label>
								<input type="text" onChange = {this.handleChange} className="input" id="pass" name="email" placeholder="Email" title="Email" value={this.props.user.email} /><br/><br/>
							</div>
							<div className="group">
								<input type="submit" className="button" value="Submit"/>
							</div>
							<div className="hr"></div>
							</form>
						</div>
					</div>
				</div>
				<div className="login-html2">
					<img src={image} alt="contact" /> 
				</div>
			</div>
		</div>
		</>
		)
	}
}

const mapStateToProps = (state) =>{
	return {
		user : state.secondreducer,
	};
}

const mapDispatchToProps = (dispatch) =>{
	return{
		name:(name) => {	
			dispatch(setValues(name))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);