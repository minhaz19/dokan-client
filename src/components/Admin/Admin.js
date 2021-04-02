import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import AddProducts from '../AddProducts/AddProducts';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTasks} from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(0);
   
    
    return (
        <div>
            <div class="sidenav">
                <Link to="/" id="headerTxt">Dokan</Link>
                <p onClick={()=>setAdmin(0)}><FontAwesomeIcon icon={faPlus} />Add Products</p>
                <p onClick={()=>setAdmin(1)}><FontAwesomeIcon icon={faTasks} />Manage Products</p>
            </div>

            <div class="main">
            {(admin === 0) && <AddProducts></AddProducts>}
            {(admin === 1) && <ManageProduct></ManageProduct>}
            </div>
            
        </div>
    );
};

export default Admin; 