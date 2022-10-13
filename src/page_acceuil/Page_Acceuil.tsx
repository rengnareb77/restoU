import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Ru_Component from "./CorpsPage/Ru_Component";

     /* numbers.map((number) => number * 2);*/

class Page_Acceuil extends React.Component {
  render() {
    return (
      <div className="Page_Acceuil">
        <div className="Header">
          <Header></Header>
    
        </div>
        <Ru_Component></Ru_Component>
        <Ru_Component></Ru_Component>
        <Ru_Component></Ru_Component>


      <Footer></Footer>
      </div>
    );
  }
}
export default Page_Acceuil;
