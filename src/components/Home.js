import React from 'react';
import '../css/home.css';
import Slider from './Slider';
import Banner from '../Assets/images/web.jpeg';
import Banner2 from '../Assets/images/first.jpeg';
 
const images = [
  Banner,Banner2
];

function Home(){
	return(
	<>
	<section>
		<div className="left center">
			<h3>Lerem ipsam Lerem ipsam</h3>
			<h5>Lerem ipsam Lerem ipsam</h5>
		</div>
		<article>
			<Slider images={images} />
		</article>
	</section>
	<footer>
	  	<p className="links"><span><i className="fab fa-google"></i></span>&nbsp;&nbsp;<span><i className="fab fa-facebook-f"></i></span>&nbsp;&nbsp;<span><i className="fab fa-twitter"></i></span></p>
	</footer>
	</>
	)
}

export default Home;