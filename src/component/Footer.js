import React from 'react';
import Menu_Btn from './Menu_Btn';

const Footer = () => {
    return (
        <div className="footer">
            <div className="btn-footer">
                <Menu_Btn name ="Se Connecter"></Menu_Btn>
            </div>
            <div className="realisation">
                <h1 id="titre">Réalisés par étudiants de l'ubo: </h1>
                <ul>
                    <li>Jean-Baptiste</li>
                    <li>Thomas</li>
                    <li>Titouan </li>
                    <li>Jean-Marin</li>
                </ul>

            </div>
        </div>
    );
};

export default Footer;