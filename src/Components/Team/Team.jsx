import React from 'react'
import './Team.css';
import teamLogo from '../../assets/team.svg';

export default function Team() {
    return (
        <div className = 'container'>
            <br/>
            <h3 className = 'text-center'> Some good caption here </h3>
            <div className = 'row'>
                <div className="col-md-6">
                    <img src={teamLogo} alt="" width = "100%"/>
                </div>
                <div className="col-md-6">
                    <div className = 'Lead__div'>
                        <div className = 'lead__image'>
                            <img src="https://i.pravatar.cc/200" alt=""/>
                        </div>
                        <div>
                            <h3>Kavin Raju S</h3>
                            <small className = 'text-secondary'>DSC Lead</small>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div>
                <br/><br/>
                <div className = 'container'>
                    <h3 className = 'text-center'> Tech Team </h3>
                    <div className = 'tech_team'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia maiores eius quis, magnam dignissimos assumenda sapiente, dolore similique ducimus impedit pariatur id ratione repellat dolor odit ab omnis tenetur nisi?
                    </div>
                    <div className = 'tech_team'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia maiores eius quis, magnam dignissimos assumenda sapiente, dolore similique ducimus impedit pariatur id ratione repellat dolor odit ab omnis tenetur nisi?
                    </div>
                    <div className = 'tech_team'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia maiores eius quis, magnam dignissimos assumenda sapiente, dolore similique ducimus impedit pariatur id ratione repellat dolor odit ab omnis tenetur nisi?
                    </div>
                    <div className = 'tech_team'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia maiores eius quis, magnam dignissimos assumenda sapiente, dolore similique ducimus impedit pariatur id ratione repellat dolor odit ab omnis tenetur nisi?
                    </div>
                </div>

                <br/><br/>
            </div>
            <br/>
        </div>
    )
}
