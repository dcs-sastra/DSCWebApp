import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'
import dsclogo from '../images/dsclogo.png'

class Navbar extends Component {
render()
{
return (
<nav class="navbar navbar-expand-md navbar-light">
    <Link to="/" class="navbar-brand">
        <img src={dsclogo} height="75" width="90" alt="DSC" />
    </Link>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav">
 
            <h5>DSC SASTRA</h5>
        </div>
        <div class="navbar-nav ml-auto">
            <a href="https://medium.com/@dsc.sastra.university" class="nav-item nav-link" target="_blank"><b>Blog</b></a>
            <pre>   </pre>
            <Link to="/teams" class="nav-item nav-link"><b>Team</b></Link>
            <pre>   </pre>
            <Link to="/events" class="nav-item nav-link"><b>Events</b></Link>
            <pre>   </pre>
            <a href="/#contact" class="nav-item nav-link"><b>Contact</b></a>
            <pre>   </pre>
        </div>
    </div>
</nav>
  )
}
}
export default withRouter(Navbar)