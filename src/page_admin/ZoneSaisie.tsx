import React from "react";

type Props = {
  nom:string
}

interface State {
  nom:string
  value:string
}
class ZoneSaisie extends React.Component<Props,State> {
  constructor(props:Props) {
    super(props);
    this.state = { value: "", nom: props.nom };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event:React.SyntheticEvent) {
    this.setState({ value: (event.target  as HTMLInputElement).value });
  }

  handleSubmit(event:React.SyntheticEvent) {
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
