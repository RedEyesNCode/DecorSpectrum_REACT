import React from 'react';
import './Headbottom1.css'; 
import { RiTeamFill } from "react-icons/ri";
import { AiTwotoneLike } from "react-icons/ai";
import { MdPriceChange } from "react-icons/md";


const Headbottom = () => {

    const videoId = 'VIDEO_ID_HERE'; 
  return (
    <div className='header-3'>
    <div className='container-5'>
    <div className="container-4">
      <div className="column">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
        
      </div>
      <div className='column-1'>
      <div className="column">
      
      <h2 className="column-heading">Passionate About Elegance <br></br>and Beauty In Design</h2> 
        <p className="column-paragraph"></p>
      </div>
      <div className="column">
      <div className='icon-1'>
      <RiTeamFill color="#E7CC80" size={60}/> 
      </div>
        <h2 className="column-heading">100% Guarantee</h2>
        <p className="column-paragraph">We stand behind the quality of our<br></br> Products and assure<br></br> you that you that will fall in love with them</p>
      </div>
      <div className="column">
      <div className='icon-1'>
      <AiTwotoneLike color="#E7CC80" size={60}/>
      </div>
       <h2 className="column-heading">Professional Staff</h2>
       <p className="column-paragraph">We Are Family Ownend That Response<br></br> The Nedds of Every Customer.<br></br>We Provide Friendly Customer<br></br> Services And Are Happy to help.</p>
     </div>
     <div className="column">
     <div className='icon-1'>
     <MdPriceChange color="#E7CC80" size={60}/>
      </div>
       <h2 className="column-heading">Addordable Price</h2>
       <p className="column-paragraph">We Impact Directly From The Manfactoures Without With The<br></br> Help Of any Middle Men Without the help of any Middle-men or Agents We Therefore<br></br> Gurantee The Most Competitve<br></br> Price in Town</p><br></br><br></br>
       <p className="column-paragraph">Explore our huge selection of Exotic handmade Turkish<br></br> Chandeliers, Lamps, Ceiling Lights and Ceramics. Choose<br></br> from our fast-selling colors or customize your own unique<br></br> combination of Chandeliers and Floor lamps.</p>
     </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Headbottom;
