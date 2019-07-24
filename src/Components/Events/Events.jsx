import React, { Component } from 'react'
import './Events.css'
import list from '../../Store.js'

export default class Events extends Component {
    side=["containers left","containers right"]
    state={
        tempId:0
    }

    modalPasser = (e) =>{
        this.setState({
            tempId:e.target.id
        })
    }

    render() {
        return (
    
            <div class="Body timeline">
                
                {list.events.map(data=>
                        <div class={data.id%2==0?this.side[0]:this.side[1]}>
                        <div class="content">
                        <h2>{data.name}</h2>
                        <h4>{data.date} : {data.venue}</h4>
                        <p>{data.description}</p>
                        <button type="button" class="btn btn-success" id={data.id} data-toggle="modal" data-target="#myModal" onClick={this.modalPasser}>
                                Learn more..
                        </button>
                        </div>

                        <div class="container">
 


                    <div class="modal fade" id="myModal">
                        <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        
                            <div class="modal-header">
                            <h4 class="modal-title">{list.events[this.state.tempId].name}</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            
                            <div class="modal-body">
                            <h5>Speaker(s): {list.events[this.state.tempId].speakers}</h5>
                            {list.events[this.state.tempId].main}
                            </div>
                            
                            <div class="modal-footer">
                                <a class="btn btn-danger" href="/" target="_blank" style={{textDecoration:"none"}}>
                                Register
                                </a>
                            </div>
                            
                        </div>
                        </div>
                    </div>
  
                    </div>


                </div>
                )}

            </div>
        )
    }
}
