import React from "react";
class Password extends React.Component {
  render() {
    return (
      <input
        type="password"
        value={this.props.value}
        onChange={this.props.handleChange}
        placeholder="Password"
      />
    );
  }
}
export default Password;
