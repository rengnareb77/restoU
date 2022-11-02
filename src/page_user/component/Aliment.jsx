import React from 'react';
import Button from 'react-bootstrap/Button'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLeaf} from '@fortawesome/free-solid-svg-icons'

class Aliment extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            aliment: props.aliment,
            isButton : this.props.button,
        }
    }

    clickPlus(){
        this.props.parent.remove(this.state.aliment);
     }



    render() {
        let button = this.state.isButton?
        <OverlayTrigger
            placement="right"
            overlay={<Tooltip id="button-tooltip-2" >Ajoute moi à ton menu !</Tooltip>}>
            <Button variant="outline-primary" size={"sm"} onClick={() => this.clickPlus()}>+</Button>
        </OverlayTrigger>:"";
        let vege = this.state.aliment.isVege? <FontAwesomeIcon icon={faLeaf} color="green"  rotation={270} />: <span/>;



        return(
            <div className={"Aliment"}>
                {vege}
                <p>{this.state.aliment.nom}</p>
                {button}
            </div>)


    }

}
export default Aliment;