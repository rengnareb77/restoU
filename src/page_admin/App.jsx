import React from "react";
import "./styles.css";
import Header from "./Header";
import Entre_plat_dessert from "./Entre_plat_dessert";
import Fetch from "./Fetch";
import Listechoix from "./Listechoix";


class App extends React.Component {
  render() {
    return (
      <div id="App">
        <br />
        <div>
          Fenetre Affichage
          <br />
          <br />
          <Entre_plat_dessert nom="Entrée : " /><Listechoix/>
          <br />
          <br />
          <Entre_plat_dessert nom="Plat : " />
          <br />
          <br />
          <Entre_plat_dessert nom="Dessert : " />
          <div>
          </div> 
          <Fetch/>
        </div>
        <br />
      </div>
    );
  }
}
export default App;
