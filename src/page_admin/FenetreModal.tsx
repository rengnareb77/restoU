import React from "react";
import "react-dropdown/style.css";
import MyDropDown from "./MyDropDown";
import ZoneSaisie from "./ZoneSaisie";

type Props = {}
interface State {
  value:string
}

class FenetreModal extends React.Component<Props,State> {
  constructor(props:Props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event:React.SyntheticEvent) {
    this.setState({ value: (event.target  as HTMLInputElement).value });
  }

  handleSubmit(event:React.SyntheticEvent) {
    alert("Le produit a été ajouté: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        <ZoneSaisie nom="Nom : " />
        <br />
        <br />
        <ZoneSaisie nom="Valeur Calorique : " />
        <br />
        <br />
        <MyDropDown nom="Allèrgene : " />
        <br />
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}

export default FenetreModal;
