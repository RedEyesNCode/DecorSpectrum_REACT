import React from 'react';
import Footer from '../pages/Footer';
import "./About2.css";
import myImage from '../images/image1.jpg'; // Import your image file
import myImage1 from '../images/image2.jpg'; // Import your image file
import myImage2 from '../images/image3.jpg'; // Import your image file
import myImage3 from '../images/image4.jpg'; // Import your image file
import myImage4 from '../images/image5.jpg'; // Import your image file
import myImage5 from '../images/image6.jpg'; // Import your image file

const AboutUs = () => {
  return (

    <div>
      <div className='header-1'>
        <div className="header">
          <div className="menu">
            {/* Left-side menu items */}
            <ul>
              <a href="#"><li>Home</li></a>
              <a href="#"><li>About us</li></a>
              <h1>About Us</h1>
            </ul>
          </div>
        </div>
      </div>

      <div className="image-paragraph-row1">
        <div className="image-paragraph-row">
          <div className="column">
            <img src={myImage} alt="Description of the " />
            <img src={myImage1} alt="Description of the image" style={{ borderRadius: '15px 100px 15px 50px', height: '360px', marginTop: '15px' }} />


            <div className='head-1'>
              <h1 style={{ display: 'flex', alignItems: 'flex-start', fontSize: '44px', color: 'black', marginLeft: '50px', fontFamily: 'Rosario' }}>About our products</h1>
              <p className="paragraph" style={{ marginLeft: '20px', marginTop: '-10px', fontFamily: '"Rosario",Sans-serif', fontSize: '1px;' }}>Décor Spectrum has been in business since 2009. We are retailers and<br/> wholesalers of handcrafted Turkish Lamps, Chandeliers, Ceramics and<br/> Leather animal figurine accents. We strive to bring our valuable customers<br/> the best in décor from around the globe. We believe in your happiness and<br></br> customer satisfaction. Our range of products includes one of a kind<br/> decorative handcrafted animal figurines and accent furniture made from<br/> genuine Goat or Sheepskin leather. Skilled artisans who specialize in the art<br/> add their unique touches to beautify these animals and almost bring them<br/> to life. Customers can freely browse our website and send us an enquiry for<br/> wholesale prices and availability of items.</p>

            </div>
          </div>
        </div>
      </div>


      <div className='head-4'>
        <h2 style={{ display: 'flex', alignItems: 'flex-start', fontSize: '30px', color: 'black', marginLeft: '-50px', fontFamily: '"Rosario",Sans-serif', }}>Established in<br></br> 2009</h2>
        <div className='gap'>
          <h3 style={{ marginTop: '-60px', color: 'black', fontFamily: 'Rosario', fontSize: '36px', color: 'grey' }}>1,000+<br></br>
             <span style={{marginTop: '-20px', color: 'black', fontFamily: 'Rosario', fontSize: '25px',  color: 'black'}}>Customers</span></h3>
        </div>
      </div>



      <div className='image-23'>
        <div className="image-paragraph-row1">
          <div className="image-paragraph-row">
            <div className="column">
              <img src={myImage2} alt="Description of the " style={{ borderRadius: '80px 80px 15px 70px', height: '360px', marginTop: '15px', fontFamily: 'Rosario' }} />
              <img src={myImage3} alt="Description of the image" style={{ borderRadius: '10px 100px 0px 70px', height: '360px', marginTop: '-35px', fontFamily: 'Rosario' }} />


              <div className='head-2'>
                <h1>Leather Figurines and<br></br>  Accent furniture</h1>

                <p className="paragraph" style={{ marginLeft: '20px', marginTop: '-10px', fontFamily: '"Rosario",Sans-serif', fontSize: '15px;' }}>Beautify your living space with these true conversation pieces. This leather<br/> art is procured from India. Each item is individually handcrafted in genuine <br/> oat or Sheepskin leather. The animals are skillfully molded into shape using<br/> a wireframe process, giving them rigidity. They are then pulped over by the<br/> original Paper Mache process. After days of thorough drying, they are then<br/> wrapped around with genuine goat or sheepskin leather and sprayed with<br/> vegetable dyes that have no artificial or harmful chemicals. The animals<br/> are finally completed by incorporating features such as glass eyes, plastic<br/> tusks or horns and antlers made from dried twine. The products are cured<br/> for a few days before being shipped to Canada to remove any pungent or<br/> unpleasant leather odors. They are now ready to bring to you to adorn and<br/> beautify your haven.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    



      <div className="container5">
        <div className="content1">
          <h2 style={{ marginLeft: '20px', marginTop: '44px', fontFamily: '"Rosario",Sans-serif', fontSize: '35px;', justifyContent: 'center', textAlign: 'center', alignItems: 'center',  }}>Care Instructions for Leather home decor items
          </h2>
          <p style={{ marginLeft: '20px', marginTop: '-10px', fontFamily: '"Rosario",Sans-serif', fontSize: '35px;', justifyContent: 'center', textAlign: 'center', alignItems: 'center', }}>

            Keep items free of dust by wiping down gently with a soft lint-free cotton cloth. You may use regular clear shoe polish to shine the product once every few<br></br> months. Please keep products away from direct sunlight and water.

          </p>
        </div>
      </div>

      <div className="container-0" style={{ marginLeft: '20px', marginTop: '180px' }}>
        <div className="column">
          <div className="container">
            <h1 style={{ marginLeft: '-210px', fontSize: '44px', color: 'black',fontFamily: '"Rosario' }}>Turkish Lamps and<br></br> Ceramics</h1>
            <p className="paragraph" style={{ marginLeft: '20px', marginTop: '-10px', fontFamily: '"Rosario",Sans-serif', fontSize: '18px;' }}>Brighten your home with the beauty of one of a kind, completely handmade lighting fixtures and colorful ceramic decorative plates and bowls. <br /> All of our captivating lamps and ceramics are imported directly from Istanbul, each one meticulously handcrafted by local mosaic artists using traditional tools and techniques. <br /> The lamps are made of brass, hand-blown glass globes, and extra fine-cut colored glass and beads that are of the highest quality. <br /> The exotic styles of our Turkish lamps will truly enhance the décor of your room and create a calming ambience. We offer a wide range of colors and patterns, and you are sure to find something to either complement or contrast your décor. <br /> The electrical components are compatible with US and Canadian voltage of 110V. All lamps and chandeliers use regular E-12 LED or E-26 chandelier bulbs.</p>
          </div>
        </div>
        <div className="column">
          <img src={myImage4} alt="Description of the " style={{ borderRadius: '80px 80px 15px 70px', height: '350px', marginTop: '-15px', fontFamily: 'Rosario', width: '300px' }} />
          <img src={myImage5} alt="Description of the image" style={{ borderRadius: '10px 100px 0px 70px', height: '350px', marginTop: '36px', fontFamily: 'Rosario', width: '300px' }} />
        </div>
      </div>



      <div className="container3">
        <div className="content1">
          <h2>Sale items (if applicable)
          </h2>
          <p className="paragraph" style={{ marginLeft: '20px', marginTop: '-10px', fontFamily: '"Rosario",Sans-serif', fontSize: '17px;' }}>We reserve the right to discontinue any special promotion without prior notice. Only regular priced items may be refunded, if found defective, within a week of<br></br> purchase, with a valid receipt. A restocking fee of 15% will be applicable on refunds. We do not offer refunds on clearance or final sale items. Shipping an item<br></br> back to us for a refund will be the responsibility of the customer.</p>

        </div>



        <div className="content1">
          <h2>Exchanges / Refunds (if applicable)
          </h2>
          <p className="paragraph" style={{ marginLeft: '20px', marginTop: '-10px', fontFamily: '"Rosario",Sans-serif', fontSize: '17px;' }}>Our company takes pride in customer satisfaction. If you believe you have received damaged or defective goods, you can apply for an exchange.  Due to the<br></br> delicate nature of our items, we will only issue refunds for items that are defective or damaged within a week of purchase. A restocking fee of 25% will apply to<br></br> items that are being returned for any other reasons. Please attach images of the defective product(s) and send us an email at info@decorspectrum.com.  We will<br></br> be more than happy to assist you. </p>

        </div>



        <div className="content1">
          <h2>Disclaimer

          </h2>
          <p className="paragraph" style={{ marginLeft: '20px', marginTop: '-10px', fontFamily: '"Rosario",Sans-serif', fontSize: '17px;' }}>We will take utmost care to ship you the product of your choice. However, due to the handmade nature of the items, there could be a possibility of slight<br></br> variation in color and design of the products.</p>

        </div>
      </div>





    </div>

  );
};

export default AboutUs;
