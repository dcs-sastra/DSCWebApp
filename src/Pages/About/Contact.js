import React from "react"
import design_team from "./assets/design_team.png";
import social_girl from "./assets/social_girl.png";
import fb from "./assets/fb.png";
import med from "./assets/med.png";
import playStore from "./assets/playStore.png"
import youTube from "./assets/youTube.png"
import insta from "./assets/insta.png"
import linkedin from "../Footer/linkedin.svg"
import twitter from "../Footer/twitter.svg"

import "./contact.css";


const Details = ({msg,detail}) => {
    return(
        <div>
            <h1 className="Contact-details-msg">{msg}</h1><br />
            <h3 className="Contact-details-detail">{detail}</h3>
        </div>
    );
}

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
            <button><img src={insta} alt="instagram" width="40px" /></button>
            <button className="twitter"><img  src={twitter} alt="twitter" width="25px" /></button>
            <button><img src={fb} alt="fb" width="40px" /></button>
            <button className="linkedIn"><img id="linkedIn" src={linkedin} alt="linkedIn" width="25px" /></button>
            <button><img src={med} alt="med" width="40px"  /></button>
            <button><img src={youTube} alt="you tube" width="40px"  /></button>
            <button><img id="playStore" src={playStore} alt="playStore" width="20px"  /></button>
        </div>
    );
}
const Contact = () => {
    let msg1 = "Contact our Development and Support Team",
        msg2 = "We are up always in your favourite social media",
        detail1 = "Need to get in touch with the team ? We're all ears.",
        detail2 = "Regular updates are in demand. But we do."
    return(
        <div>
        <div className="Contact">
        <div className="Contact-details">
            <Details msg={msg1} detail={detail1}/>
            <Buttons type={1}/>
        </div>
        <div className="Contact-img">
            <img src={design_team} alt={"design-team"}/>
        </div>
    </div>

    <div className="Contact">
        <div className="Contact-details">
            <Details msg={msg2} detail={detail2}/>
            <Buttons type={2}/>
        </div>
        <div className="Contact-img" style={{order:-1}}>
            <img src={social_girl} alt={"media-img"}/>
        </div>
    </div>
        </div>
        
    );
}
export default Contact;