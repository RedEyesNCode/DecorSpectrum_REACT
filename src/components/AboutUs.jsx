import React from 'react';
import MaterialNavBar from './MaterialNavBar';
import Footer from '../pages/Footer';

const AboutUs = () => {
  return (

    <div>
      <MaterialNavBar/>
       <div className="about-us">
      <h1>About Us</h1>
      <p>Welcome to our website! We're glad you're here to learn more about us.</p>
      <section>
        <h2>Our Mission</h2>
        <p>Our mission is to deliver outstanding services and products that improve people's lives. We believe in innovation, quality, and our community.</p>
      </section>
      <section>
        <h2>Our Story</h2>
        <p>Founded in 2010, we started as a small team passionate about making a difference. Over the years, we've grown into a diverse group of thinkers, creators, and leaders committed to our customers and each other.</p>
      </section>
      <section>
        <h2>Meet the Team</h2>
        <p>Our team is our biggest asset. From engineers to customer service, every member of our team plays a vital role in our journey and success.</p>
      </section>
      <section>
        <h2>Contact Us</h2>
        <p>Have questions or want to get in touch? Email us at contact@ourwebsite.com.</p>
      </section>
    </div>
    <Footer/>

    </div>
   
  );
};

export default AboutUs;
