import React from "react";
import "react-dropdown/style.css";
import MyDropDown from "./MyDropDown";
import ZoneSaisie from "./ZoneSaisie";
import Radioboutton from "./Radioboutton";

class FenetreModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Le produit a été ajouté: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br/>
        <br />
        <ZoneSaisie nom="Nom : " />
        <br />
        <br />
        <ZoneSaisie nom="Valeur Calorique : " />
        <br />
        <br />
        <Radioboutton nom="plat végétarien ?"/>
        <br/>
        <br/>
        <MyDropDown nom="Allèrgene : " />
        <br />
        <br/>
        
        <input type="submit" value="Envoyer" />
        
      </form>
    );
  }
}

export default FenetreModal;
