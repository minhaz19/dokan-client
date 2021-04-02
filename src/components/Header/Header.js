import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { UserContext } from '../../App';
import { useContext } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const name = loggedInUser.name;
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    return (
        <div className="header">
            <div className="topnav" id="myTopnav">
                <a className="shopName"><Link to='/'>Dokan</Link></a>
                <div class="header-right">
                    <a></a>
                    <a><Link to="/">Home</Link></a>
                    <a><Link to="/admin">Admin</Link></a>
                    <a><Link to="/orders">Orders</Link></a>
                    <a><Link to="/login">{name? name : 'Login'}</Link></a>
                    <a href="javascript:void(0);" class="icon" onClick={() => myFunction()}>
                    <Link><FontAwesomeIcon icon={faBars} />
                    </Link></a>
                </div>
            </div>
        </div>

    );
};

export default Header;