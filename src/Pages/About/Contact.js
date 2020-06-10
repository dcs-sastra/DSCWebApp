import React from "react"
import design_team from "./assets/design_team.png";
import social_girl from "./assets/social_girl.png";
import Buttons from "./Buttons"


import "./contact.css";


const Details = ({msg,detail}) => {
    return(
        <div>
            <h1 className="Contact-details-msg">{msg}</h1><br />
            <h3 className="Contact-details-detail">{detail}</h3>
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