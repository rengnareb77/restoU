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

    remove(aliment){
        let listAliments = this.state.aliments;
        delete listAliments[listAliments.indexOf(aliment)];
        this.setState({aliments:listAliments});
    }

    add(aliment){
        let listAliments = this.state.aliments;
        listAliments.add(aliment);
        this.setState({aliments:listAliments});
    }

    render() {
        if (!this.state.aliments || this.state.aliments.length === 0)
            return(<div className={"PlatChoix"}/>)
        return(
            <div className={"PlatChoix"}>
                <h2>{this.state.titre}</h2>
                    {this.state.aliments.map((aliment,key) =>(
                        <Aliment parent={this} key={key} aliment={aliment} button={true}/>
                    ))}
            </div>
        )


    }

}
export default PlatChoix;