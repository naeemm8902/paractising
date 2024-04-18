  import React from "react";
  import "./home.css";
  import Navbar from "../navbar/navbar";
  import Cover from "../cover/cover";
  import NavbarNew from "../navbar/NavbarNew";
  import Navbartop from "../navbar/navbartop";
  import Box from "../box/box";
  import Sticky from "../sticky/sticky";
  import Singleine from "../singleline/singleine";
import Blursingleline from "../blursingleline/blursingleline";
import Developers from "../developers/developers";
import Footer from "../footer/footer";
import StyledButton from "../button/StyledButton";
import Count from "../count/count";
import A from "../A/A";
import Parent from "../A/parent";

  const Home = () => {
    
    return (
      <div className="home_container">
          <div className="homenavtop"><Navbartop/></div>
          {/* <div className="homenav"><NavbarNew/></div> */}
                    {/* <Count/> */}

          {/* <div className="homecover"><Cover/> </div> */}
          {/* <div className="Singleline"><Singleine name="Crafting Digital Experiences"/></div>
          <div className="Box"><Box/></div>
          <div className="page1">
            <img src="./images/back.jpg" alt="image error"></img>
          </div>
          <div><Blursingleline/></div>
          <div className="Singleline"><Singleine name="Developers"/></div>
          <div className="developers"><Developers/></div>
          <div className="footer"><Footer/></div> */}
        {/* <A/> */}
        <Parent/>
      </div>
    );
  };

  export default Home;
