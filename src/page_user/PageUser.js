import './PageUser.css';
import Header from "../component/Header";
import Filtre from "./component/Filtre";
import Carte from "./component/Carte";
import CartePerso from "./component/CartePerso";
import Footer from "../component/Footer";

function PageUser() {

    let tabAliment = {"Entree":[],"Plat":[],"Dessert":[]}
    let alimentE1 = new AlimentObject("Carrote rappe",60,true,null)
    let alimentE2 = new AlimentObject("Surrimi",120,false,null)
    let alimentE3 = new AlimentObject("Concombre",20,true,null)
    tabAliment["Entree"].push(alimentE1)
    tabAliment["Entree"].push(alimentE2)
    tabAliment["Entree"].push(alimentE3)

    let alimentP1 = new AlimentObject("Pâte bolognaise",400,false,null)
    let alimentP2 = new AlimentObject("Gratin de choux fleur",120,true,null)
    tabAliment["Plat"].push(alimentP1)
    tabAliment["Plat"].push(alimentP2)

    let alimentD1 = new AlimentObject("Yaourt",120,true,null)
    let alimentD2 = new AlimentObject("Éclair au chocolat",110,true,null)
    tabAliment["Dessert"].push(alimentD1)
    tabAliment["Dessert"].push(alimentD2)

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
