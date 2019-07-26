import React from 'react'
import './Team.css';
import teamLogo from '../../assets/team.svg';
import data from '../../Store.js';


export default function Team() {
    let appDevelopers = [];
    let iterator = 0;
    for(let i=1;i<=5;i++) {
        for(let j=1; j <= i; j++) {
            let person = data.teams.app[iterator++];
            if(person) {
                console.log(person.imgUrl);
                let url = person.imgUrl;
                let name = person.name;
                let jsx = (
                    <div key = {iterator} className = 'team_member_wrapper'>
                        <img src= {url} alt="" className = 'team_members' />
                        <p>{name}</p>
                    </div>
                );
                appDevelopers.push(jsx);
            }
        }
        appDevelopers.push(<><br id = {iterator} /></>)
    }
    
    let nonTech = data.teams.nonTech.map((person,id) => {
        return (
            <div className = 'col-4 text-center non_tech' key = {id}>
                <img src= {person.imgUrl} alt="" className = 'team_members' />
                <p>{person.name}</p>
                <p>{person.team}</p>
            </div>
        );
    })

    return (
        <div className = 'container'>
            <br/>
            <h3 className = 'text-center'> Some good caption here </h3>
            <div className = 'row'>
                <div className="col-md-6">
                    <img src={teamLogo} alt="" width = "100%"/>
                </div>
                <div className="col-md-6">
                    <br/><br/>
                    <div className = 'Lead__div'>
                        <div className = 'lead__image'>
                            <img src="https://i.pravatar.cc/200" alt=""/>
                        </div>
                        <div>
                            <h3>Kavin Raju S</h3>
                            <small className = 'text-secondary'>DSC Lead, App Developer</small>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div>
                <br/><br/>
                <div className = 'container'>
                    <h3 className = 'text-center'> Tech Team </h3>
                    <div className = 'divider'></div>
                    <div className = 'tech_team img1'>
                        <div className = 'row'>
                            <div style = {{width: '100%'}}>
                               <div className = 'appDevelopers_wrapper '>
                                    {appDevelopers}
                               </div>
                            
                            </div>
                            <div className = 'team_title'>
                                <h3 className = 'text-left'>App Developers</h3>
                            </div>
                        </div>
                    </div>
                    <div className = 'tech_team img2'>
                        <div className = 'row'>
                        <div style = {{width: '100%'}}>
                               <div className = 'appDevelopers_wrapper'>
                                    {appDevelopers}
                               </div>
                            
                            </div>
                            <div className="team_title">
                                <h3 className = 'text-left text-white'>Web Developers</h3>
                            </div>
                        </div>
                        
                    </div>
                    <div className = 'tech_team img3'>
                    <div className = 'row'>
                            <div style = {{width: '100%'}}>
                               <div className = 'appDevelopers_wrapper'>
                                    {appDevelopers}
                               </div>
                            
                            </div>
                            <div className="team_title">
                                <h3 className = 'text-center'>Machine Learning Enthusiasts</h3>
                            </div>
                        </div>
                    </div>
                    <div className = 'tech_team img4'>
                        <div className="row">   
                        <div style = {{width: '100%'}}>
                               <div className = 'appDevelopers_wrapper'>
                                    {appDevelopers}
                               </div>
                            
                            </div>
                            <div className="team_title">
                                <h3 className = 'text-left text-white'>Blockchain / AR </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <div className = 'container'>
                    <h3 className = 'text-center'> Non - Tech Team </h3>
                    <div className = 'divider'></div>
                    <div className="card nonTechTeam">
                        <div className="container">
                            <br/>
                            <div className = 'row '>
                                {nonTech}
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
                <br/><br/>
            </div>
            <br/>
        </div>
    )
}
