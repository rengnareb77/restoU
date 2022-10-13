import './PageUser.css';
import Header from "../component/Header";
import Filtre from "./component/Filtre";
import Carte from "./component/Carte";
import CartePerso from "./component/CartePerso";
import Footer from "../component/Footer";

const PageUser= () =>{
    const data = {
        "Entree":[
            {"nom":"carotte rappe","valeurCalorique":60,"isVege":true,"allergenes":null},
            {"nom":"Surrimi","valeurCalorique":120,"isVege":false,"allergenes":null},
            {"nom":"Concombre","valeurCalorique":20,"isVege":true,"allergenes":null},
        ],
        "Plat":[
            {"nom":"Pâte bolognaise","valeurCalorique":400,"isVege":false,"allergenes":null},
            {"nom":"Gratin de choux fleur","valeurCalorique":120,"isVege":true,"allergenes":null},
        ],
        "Dessert":[
            {"nom":"Yaourt","valeurCalorique":50,"isVege":true,"allergenes":null},
            {"nom":"Éclair au chocolat","valeurCalorique":110,"isVege":true,"allergenes":null},
        ]
    };
  return (

    <div className="PageUser">
        <Header/>
        <Filtre/>
        <div className={"Cartes"}>
            <Carte titre="Repas du Midi" aliments={tabAliment}/>
            <CartePerso titre="Votre menu" aliments={null}/>
        </div>

        <Footer/>
    </div>

  );
}

export default PageUser;
