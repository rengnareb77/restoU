import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
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
            <NavLink 
                to="/accueil" 
                className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>Acceuil</li>
            </NavLink>
            {data.map((ru, index) => (
                    <NavLink 
                        key={index}
                        to="/{test}"
                        //className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>{ru.nomRu}</li>
                    </NavLink>
            ))}
        </ul>
        </div>
    

    )

    }
export default Navigation;