import React from 'react';
import Aliment from "./Aliment";

class PlatChoix extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            titre: props.titre,
            aliments: props.aliments
        }
    }

    render() {
        if (this.state.aliments)
            return(
                <div className={"PlatChoix"}>
                    <h2>{this.state.titre}</h2>
                        {this.state.aliments.map(aliment =>(
                            <Aliment aliment={aliment} button={true}/>
                        ))}
                </div>
            )
        else
            return(
                <div className={"PlatChoix"}>
                    <h2>{this.state.titre}</h2>
                </div>
            )
    }

}
export default PlatChoix;