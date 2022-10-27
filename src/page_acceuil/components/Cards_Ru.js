import React from 'react';
import Menu_Btn from '../../component/Menu_Btn';

const Cards_Ru = ({ru}) => {
    return (
        <div className="cardsRu">   
            <section>
                <figure className="cardss">
                    <div className="card_hero">
                    <img className="card_img" src={ru.imageRu} alt="Ceci est une image de RU brest" />
                    </div>
                    <div className="card_content">
                    <div className="card_info">
                        <h5 className="card_price">{ru.nomRu}</h5>
                        <p className="card_address"> {ru.adresseRu}</p>
                        <p className="card_details"> {ru.descriptionRu}</p>
                    </div>
                    <Menu_Btn name ="En savoir plus"
                            onClick={ru.nomRu}></Menu_Btn> 
                    </div>
                </figure>
            </section>
         </div>
    );
};

export default Cards_Ru;