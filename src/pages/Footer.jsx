import React from 'react';
import './Footer-1.css';
import images19 from '../images/logo-1.png';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiLinkDuotone } from "react-icons/pi";




const Footer = () => {
	return (
		<footer class="footer">
			<div class="container row">
				<img src={images19} alt="Example" className="rounded-image18" />
				<div class="footer-col">

					<h4>Explore Support</h4>
					<ul >
						<li><a href="#">Home</a></li>
						<li><a href="#">Contact Us</a></li>
						<li><a href="#">About Us</a></li>
						<li><a href="#">Shop</a></li>
					</ul>
				</div>
				<div class="footer-col">
					<h4>get help</h4>
					<ul>
						<li><a href="#">Support</a></li>
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Address</a></li>
						<li><a href="#">Primary Location</a></li>

					</ul>
				</div>
				<div class="footer-col">
					<h4>Get In Touch</h4>
					<h5>Question or feedback?
						We’d love to hear from you</h5>
				</div>
				<div class="footer-col">
					<h4>follow us</h4>
					<div class="social-links">
						<a href="#"><FaFacebook />
						</a>
						<a href="#"><FaTwitter /></a>

						<a href="#"><PiLinkDuotone />
						</a>
						
					</div>
				</div>
			</div>
			<hr></hr>
			<h6 div className='h-1'>Designed by 2024</h6>
		</footer>

	);
};

export default Footer;
