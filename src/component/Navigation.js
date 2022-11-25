import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

return(
<div className="navigation">
    <ul>
            <NavLink 
                to="/Home" 
                className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>Acceuil</li>
            </NavLink>
            <NavLink 
                to="/PageUser"
                className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>kergoat</li>
            </NavLink>
            <NavLink 
                to="/PageUser"
                className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>Armen</li>
            </NavLink>
            
        </ul>
       </div>
    );
};
/*
    const [data, setData] = useState([]);
    const [test, setTest] = useState('edded');

    useEffect(() => {
        axios
          .get("http://obiwan.univ-brest.fr:7070/user/1")
          .then((res) => setData(res.data));
      }, []);
      
    return (
       <div className="navigation">
        <ul>

            {data.map((ru, index) => (
                    <NavLink 
                        key={index}
                        to="/"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>{ru.nomRu}</li>
                    </NavLink>
            ))}


{*/
export default Navigation;