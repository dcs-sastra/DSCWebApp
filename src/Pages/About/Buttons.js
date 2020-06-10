import React from "react"
import fb from "./assets/fb.png";
import med from "./assets/med.png";
import playStore from "./assets/playStore.png"
import youTube from "./assets/youTube.png"
import insta from "./assets/insta.png"
import linkedin from "../Footer/linkedin.svg"
import twitter from "../Footer/twitter.svg"

const Buttons = ({type}) => {
    if(type===1){
        return(
            <div className="Contact-primaryButton">
                <button> Contact Us </button>
            </div>
        );
    }
    return(
        <div className="Contact-mediaButtons">
            <button 
                onClick={() => {
                window.open("https://www.instagram.com/dsc.sastra.university/");
              }}>
                <img src={insta} alt="instagram" width="40px" />
            </button>    
            <button 
                className="twitter"
                onClick={() => {
                    window.open("https://twitter.com/dsc_sastra");
                  }}>
                <img  src={twitter} alt="twitter" width="25px" />
            </button>
            <button  onClick={() => {
                window.open("#");
              }}>
                <img src={fb} alt="fb" width="40px" />
            </button>
            <button 
                className="linkedIn" 
                onClick={() => {
                window.open("https://www.linkedin.com/company/dsc-sastra")
              }}>
                <img id="linkedIn" src={linkedin} alt="linkedIn" width="25px" />
            </button>
            <button 
                onClick={() => {
                window.open("https://medium.com/dsc-sastra-deemed-to-be-university")
              }}>
                <img src={med} alt="med" width="40px"  />
            </button>
            <button  
                onClick={() => {
                window.open("#");
              }}>
                <img src={youTube} alt="you tube" width="40px"  />
            </button>
            <button  onClick={() => {
                window.open("#");
              }}>
                <img id="playStore" src={playStore} alt="playStore" width="20px"  />
            </button>
        </div>
    );
}
export default Buttons;