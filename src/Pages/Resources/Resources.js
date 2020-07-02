import React, {useState, useEffect} from 'react';
import loader from "../../loader.gif";
import Modal from './Modal';
import './Resources.css';

const MAX_DESCRIPTION_LENGTH = 150;

export default function Resources () {
    const [resources, setResources] = useState([]);
    const [filter, setFilter] = useState("");
    const [waitingForData, setWaitingForData] = useState(true);
    const [selectedResource, setSelectedResource] = useState(null);

    // Get the resources from the backend
    useEffect(() => {
        getResourcesFromServer();
        async function getResourcesFromServer() {
            const data = await fetch('https://dscsastraapi.herokuapp.com/resources');
            const resources = await data.json();
            const sample_resources = [{
                    id: '1',
                    name: 'Freecodecamp',
                    description: 'A free code camp',
                    resource_url: 'https://freecodecamp.org',
                    image_url: 'https://images.unsplash.com/photo-1588336443962-49d88df004a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80'
                }, {
                    id: '2',
                    name: 'Freecodecamp',
                    description: 'This a line, this is line one, this is a line. This a line, this is line two, this is a line. This a line, this is line three, this is a line.',
                    resource_url: 'https://freecodecamp.org',
                    image_url: 'https://images.unsplash.com/photo-1588336443962-49d88df004a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80'
                }, {
                    id: '3',
                    name: 'Freecodecamp',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    resource_url: 'https://freecodecamp.org',
                    image_url: 'https://images.unsplash.com/photo-1588336443962-49d88df004a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80'
                }, {
                    id: '4',
                    name: 'Freecodecamp',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    resource_url: 'https://freecodecamp.org',
                    image_url: 'https://images.unsplash.com/photo-1588336443962-49d88df004a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80'
                }, {
                    id: '6',
                    name: 'Freecodecamp',
                    description: 'A free code camp',
                    resource_url: 'https://freecodecamp.org',
                    image_url: 'https://images.unsplash.com/photo-1588336443962-49d88df004a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80'
                }, {
                    id: '5',
                    name: 'Freecodecamp',
                    description: 'A free code camp',
                    resource_url: 'https://freecodecamp.org',
                    image_url: 'https://images.unsplash.com/photo-1588336443962-49d88df004a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80'
                }, {
                    id: '7',
                    name: 'Freecodecamp',
                    description: 'A free code camp',
                    resource_url: 'https://freecodecamp.org',
                    image_url: 'https://images.unsplash.com/photo-1588336443962-49d88df004a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80'
                }, {
                    id: '8',
                    name: 'Freecodecamp',
                    description: 'A free code camp',
                    resource_url: 'https://freecodecamp.org',
                    image_url: 'https://images.unsplash.com/photo-1588336443962-49d88df004a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80'
                }, {
                    id: '9',
                    name: 'Freecodecamp',
                    description: 'A free code camp',
                    resource_url: 'https://freecodecamp.org',
                    image_url: 'https://images.unsplash.com/photo-1588336443962-49d88df004a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80'
                }
            ]
            setResources(sample_resources);
            setWaitingForData(false);
        }
    }, []);

    function getResources() {
        if(resources.length === 0) {
            return (
                <div>
                    No Resources Found
                </div>
            )
        }

        const filteredResources = resources.filter(resource => resource.name.toLowerCase().includes(filter.toLowerCase())
                                                                || resource.description.toLowerCase().includes(filter.toLowerCase()));

        if(filteredResources.length === 0) {
            return (
                <div>
                    {`No resource's name contains ${filter}`}
                </div>
            )
        }

        return filteredResources.map(resource => (
            <div className="resource" key={resource.id}>
                <div className="resource-poster">
                    <img className="img-fluid" src={resource.image_url} />
                </div>
                <div className="resource-content">
                    <h2>{resource.name}</h2>
                    <p>
                        {truncateString(resource.description, MAX_DESCRIPTION_LENGTH, () => setSelectedResource(resource))}
                    </p>
                    <a className="btn btn-primary btn-rounded" href={resource.resource_url} target="_blank" rel = "noopener noreferrer" >Learn more</a>
                </div>
            </div>
        ));
    }

    function search(e) {
        e.preventDefault();
        setFilter(e.target[0].value);
    }

    return (
        <div className="resources-page">
            <div className="overlay">
                <h2>Resources Section</h2>
                <h3>Never let anything to stop you learning</h3>
            </div>
            <div className="resources">
                <div className="search">
                    <form onSubmit = {search}>
                        <div className="search-bar">
                            <div className="search-icon">&#8981;</div>
                            <input type="text" className="form-control" placeholder="Search..." aria-label="Search for..." />
                        </div>
                        
                    </form>
                </div>
                {
                    selectedResource !== null &&
                    <Modal className="resources-modal" closeModal = {() => setSelectedResource(null)}>
                        <div className="resources-modal-inner">
                            <button className="close" onClick={() => setSelectedResource(null)}> ✕ </button>
                            <div className="resource-poster">
                                <img src={selectedResource.image_url} />
                            </div>
                            <div className="resource-content">
                                <h2>{selectedResource.name}</h2>
                                <p>{selectedResource.description}</p>
                                <a className="btn btn-primary btn-rounded" href={selectedResource.resource_url} target="_blank" rel = "noopener noreferrer" >Learn more</a>
                            </div>
                        </div>
                    </Modal>
                }
                
                {waitingForData ? <div className="loader"><img src={loader} /></div> : getResources()}
            </div>
        </div>
    );
}

function truncateString(str, len, onClickMore) {
    return (str.length <= len) 
                ? <span>{str}</span> 
                : <span>
                    {str.slice(0, len-1) + "..."} <span className="more" onClick = {onClickMore}>(more)</span>
                  </span>;
}