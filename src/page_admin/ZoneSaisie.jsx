import React from "react";

class ZoneSaisie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", nom: props.nom };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Le nom a été ajouté: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <label className="champs">
        {this.state.nom}
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default ZoneSaisie;
