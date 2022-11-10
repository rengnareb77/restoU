import React from 'react';
import Button from 'react-bootstrap/Button';

const Menu_Btn = (props) => {
    return (
        <div>
            <Button 
            variant="primary" 
            
            >
                {props.name}
            </Button>
        </div>
    );
};

export default Menu_Btn;