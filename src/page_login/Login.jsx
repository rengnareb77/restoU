import React from "react";
import Boutton from "./boutton";
import Input from "./Input";
import Password from "./password";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "A name was submitted: " + this.state.username + " " + this.state.password
    );
    event.preventDefault();
  }
  renderBoutonSeconnecter() {
    return (
      <Boutton
        texte="Se connecter"
        onClick={(event) => this.handleSubmit(event)}
      />
    );
  }
  renderInputUsername() {
    return <Input text="username" handleChange={this.handleChangeUsername} />;
  }
  renderInputPassword() {
    return (
      <Password text="password" handleChange={this.handleChangePassword} />
    );
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Connexion Admin
            {this.renderInputUsername()}
            {this.renderInputPassword()}
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
    );
  }
}
export default Login;
