import React from 'react';
import PlatChoix from "./PlatChoix";



class Carte extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            titre: props.titre,
            aliments: props.aliments
        }
    }
    render() {

        try {
            return (
                <div className={"Carte"}>
                    <h1>{this.state.titre}</h1>
                    <PlatChoix titre="Entrée" aliments={this.state.aliments["Entree"]}/>
                    <PlatChoix titre="Plat" aliments={this.state.aliments["Plat"]}/>
                    <PlatChoix titre="Dessert" aliments={this.state.aliments["Dessert"]} />
                </div>

            )
        } catch (e){
            return (
                <div className={"Carte"}>
                    <h1>{this.state.titre}</h1>
                    <PlatChoix titre="Entrée" />
                    <PlatChoix titre="Plat" />
                    <PlatChoix titre="Dessert"  />
                </div>

            )
        }

    }
}

export default Carte;