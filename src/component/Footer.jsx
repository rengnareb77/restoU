import React from 'react';
import {Navbar} from "react-bootstrap";


class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    render() {
        return(
            <Navbar fixed={"bottom"} className={"Footer"}>
                <h1>FOOTER</h1>
            </Navbar>
        )

    }

}
export default Footer;