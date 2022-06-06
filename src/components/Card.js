import { memo } from "react";
import Like from "./Like";

const Card = ({item}) => {
    // console.log('Card');

    const {image,title,price,id} = item;
    
    return(
        <li>
            <picture>
                <img src={image} alt={title} />
            </picture>
            <div className="datos">
                <h2 className="nameProduct">{title}</h2>
                <p className="priceProduct">{price} $</p>
                <Like id={id} />
            </div>
        </li>
    );
}

export default memo(Card);