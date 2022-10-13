import React from "react";
import "../index.css";
import MenuBtn from "./MenuBtn";

class Ru_Component extends React.Component {

  render() {
    return (
    <section>
      <figure className="cardss">
        <div className="card_hero">
          <img className="card_img" src="./kergoat.png" alt="Ceci est une image de RU brest" />
        </div>
        <div className="card_content">
          <div className="card_info">
            <h5 className="card_price">Kergouat</h5>
            <p className="card_address"> 22 rue Kergouat, 22900 Brest</p>
            <p className="card_details"> Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.</p>
          </div>
          <MenuBtn name="Voir le menu"></MenuBtn>
        </div>
      </figure>
    </section>

        
    );
  }
}
export default Ru_Component;
