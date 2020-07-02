import React, {useState, useEffect} from 'react';
import loader from "../../loader.gif";
import Modal from './Modal';
import styled from "styled-components";
import './Resources.css';

/******************** Constants ********************/
const MAX_DESCRIPTION_LENGTH = 150;
const NUMBER_OF_RESOURCES_PER_PAGE = 6;

/******************** Styled Components ********************/
const Pagination = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
`;

const PageNo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 800;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    color: white;
    background-color: #db4437;
`;

/******************** The Resource Component ********************/
export default function Resources () {

    /********** State **********/
    const [resources, setResources] = useState([]);
    const [filteredResources, setFilteredResources] = useState([]);
    const [waitingForData, setWaitingForData] = useState(true);
    const [selectedResource, setSelectedResource] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);


    /********** Effects **********/

    // Get the resources from the backend
    useEffect(() => {
        getResourcesFromServer();
        async function getResourcesFromServer() {
            const data = await fetch('https://dscsastraapi.herokuapp.com/resources');
            const resources = await data.json();
            console.log(resources);
            setResources(resources);
            setFilteredResources(resources);
            setWaitingForData(false);
        }
    }, []);


    /********** Functions used by the component  **********/

    function goToPrevPage() {
        if(currentPage == 1) return;
        setCurrentPage(currentPage => currentPage > 1 ? currentPage - 1 : currentPage);
    }

    function goToNextPage() {
        if(currentPage == Math.ceil(filteredResources.length / NUMBER_OF_RESOURCES_PER_PAGE)) return;
        setCurrentPage(currentPage => currentPage < Math.ceil(filteredResources.length / NUMBER_OF_RESOURCES_PER_PAGE) ? currentPage + 1 : currentPage);
    }

    function getResources() {
        if(resources.length === 0) return <div>No Resources Found</div>

        if(filteredResources.length === 0) return <div>No match found for the searched term</div>

        const resourcesInCurrentPage = filteredResources.slice((currentPage - 1) * NUMBER_OF_RESOURCES_PER_PAGE , currentPage * NUMBER_OF_RESOURCES_PER_PAGE);

        return resourcesInCurrentPage.map(resource => (
            <div className="resource" key={resource.id}>
                <div className="resource-poster">
                    <img className="img-fluid" src={resource.image_url} />
                </div>
                <div className="resource-content">
                    <h2>{resource.name}</h2>
                    <p>{truncateString(resource.description, MAX_DESCRIPTION_LENGTH, () => setSelectedResource(resource))}</p>
                    <a className="btn btn-primary btn-rounded" href={resource.resource_url} target="_blank" rel = "noopener noreferrer">Learn more</a>
                </div>
            </div>
        ));
    }

    function search(e) {
        e.preventDefault();
        const filter = e.target[0].value;
        let filtered = resources.filter(resource => resource.name.toLowerCase().includes(filter.toLowerCase())
                                                                || resource.description.toLowerCase().includes(filter.toLowerCase()));  
        setFilteredResources(filtered);
        setCurrentPage(1);
    }



    /********** JSX Rendered by the Component **********/

    return (
        <div className="resources-page">
            {/***** The Image in the top *****/}
            <div className="overlay">
                <h2>Resources Section</h2>
                <h3>Never let anything to stop you learning</h3>
            </div>

            {/***** Search Bar *****/}
            <div className="resources">
                <div className="search">
                    <form onSubmit = {search}>
                        <div className="search-bar">
                            <div className="search-icon">&#8981;</div>
                            <input type="text" className="form-control" placeholder="Search..." aria-label="Search for..." />
                        </div>
                        
                    </form>
                </div>

                {/***** Modal *****/}
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


                {/***** The Resource Cards *****/}
                {waitingForData ? <div className="loader"><img src={loader} /></div> : getResources()}


                {/***** Pagination Controls *****/}
                <Pagination>
                    <img
                        src="https://img.icons8.com/ios/50/000000/long-arrow-left.png"
                        onClick={goToPrevPage}
                        style={currentPage <= 1 ? {opacity: 0.2} : {}}
                    />
                    <PageNo>{currentPage}</PageNo>
                    <img
                        src="https://img.icons8.com/ios/50/000000/long-arrow-right.png"
                        onClick={goToNextPage}
                        style={currentPage >= Math.ceil(filteredResources.length / NUMBER_OF_RESOURCES_PER_PAGE) ? {opacity: 0.2} : {}}
                    />
                </Pagination>

            </div>
        </div>
    );
}


/******************** Utility Functions ********************/
function truncateString(str, len, onClickMore) {
    return (str.length <= len) 
                ? <span>{str}</span> 
                : <span>
                    {str.slice(0, len-1) + "..."} <span className="more" onClick = {onClickMore}>(more)</span>
                  </span>;
}