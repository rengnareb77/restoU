import React from "react";

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  async componentDidMount() {
      // GET request using fetch with async/await
      const response = await fetch('https://api.npms.io/v2/search?q=react');
      const data = await response.json();
      this.setState({ totalReactPackages: data.total })
  }

  render(){
    return(
    <div>
      {this.componentDidMount}
      {this.state.totalReactPackages}
    </div>
    );
  }

  
}
export default Fetch;