import React from "react";
import Dropdown from "react-dropdown";

class MyDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", nom: props.nom };
  }

  render() {
    return (
      <label className="champs">
        {this.state.nom}
        <Dropdown
          placeholder="Choix Allèrgene"
          options={[
            "Œuf",
            "Lait",
            "Moutarde",
            "Arachide",
            "Poissons",
            "Mollusques et crustacés",
            "Soja"
          ]}
        />
      </label>
    );
  }
}
export default MyDropDown;
