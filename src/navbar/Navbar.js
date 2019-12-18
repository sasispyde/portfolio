import React from 'react';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Resume from '../components/Resume';
import Experience from '../components/Experience';
import '../css/navbar.css';

function Navbar(){
	return(
		<Router>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
		    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
		      	<li className="nav-item">
					<Link to="/" title="Home" className="nav-link">Home</Link>
			    </li>
			    <li className="nav-item">
			        <Link className="nav-link menu-item" title="Experience" to='/experience'>Experience</Link>
			    </li>
			    <li className="nav-item">
			        <Link className="nav-link" title='Skills' to='/skills'>Skills</Link>
			    </li>
			    <li className="nav-item">
			        <Link className="nav-link" title='Projects' to='/projects'>Projects</Link>
			    </li>
				<li className="nav-item">
					<Link to="/resume" className="nav-link" title ="Resume">Resume</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" className="nav-link" title ="About">About</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact" className="nav-link" title ="Contact">Contact</Link>
				</li>
			</ul>
		</div>
		</nav>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/experience" component={Experience} />
			<Route exact path="/skills" component={Skills} />
			<Route exact path="/projects" component={Projects} />
			<Route exact path="/resume" component={Resume} />
			<Route exact path="/contact" component={Contact} />
			<Route component={About} />	
		</Switch>
		</Router>
	)
}

export default Navbar