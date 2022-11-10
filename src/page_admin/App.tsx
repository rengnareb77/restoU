import React from "react";
import "./styles.css";
//import Header from "./Header";
import Footer from "./Footer";
import Entre_plat_dessert from "./Entre_plat_dessert";

class App extends React.Component {
  render() {
    return (
      <div id="App">
        {/*<Header />*/}
        <br />
        <div>
          Fenetre Affichage
          <br />
          <br />
          <Entre_plat_dessert nom="Entrée : " />
          <br />
          <br />
          <Entre_plat_dessert nom="Plat : " />
          <br />
          <br />
          <Entre_plat_dessert nom="Dessert : " />
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}
export default App;
