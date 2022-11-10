import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards_Ru from './Cards_Ru';

const Ru = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get("http://obiwan.univ-brest.fr:7070/user/1")
          .then((res) => setData(res.data));
      }, []);
    return (
        <div className="ru">
            <ul>
                {data.map((ru, index) => (
                    <Cards_Ru key={index} ru={ru}/>
                ))}
            </ul>
        </div>
    );
};

export default Ru;