import './Nav.css'
import { FaArrowDown } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav(props){
    const [navbarExpanded, setNavbarExpanded] = useState(false)
    return(
        <div className="Nav" onClick={()=>{setNavbarExpanded(!navbarExpanded)}}>
            <FaArrowDown className="down-arrow"></FaArrowDown>
            <div className={`nav-bar-dropdown ${navbarExpanded ? 'expanded' : 'collapsed'}`}>
                <div onClick={()=>props.logout()} className="logout">LogOut</div>
                <Link to="/home">
                <div className="home">Home</div>
                </Link>
                
                <div className="profile">Profile</div>

            </div>
        </div>
    )
}

export default Nav