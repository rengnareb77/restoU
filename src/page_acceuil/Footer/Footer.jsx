import React from "react";
import "../index.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MenuBtn from "../CorpsPage/MenuBtn";


class Footer extends React.Component {
  render() {
    return (
        <div className="Footer">
            <div className="btn-Footer ">
                <MenuBtn name ="se connecter"></MenuBtn>
            </div>
            <div className="realisation">
                <h1 id="titre">Réalisés par étudiants de l'ubo: </h1>
                <ul>
                    <li>Jean-Baptiste</li>
                    <li>Thomas</li>
                    <li>Titouan</li>
                </ul>

            </div>
        </div>
    );
  }
}
export default Footer;
