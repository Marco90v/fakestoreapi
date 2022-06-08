import { memo } from "react";
import { NavLink } from "react-router-dom";
import Like from "./Like";

const Card = ({item}) => {

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
            <NavLink to={`../fakestoreapi/details/${id}`}>Details</NavLink>
        </li>
    );
}

export default memo(Card);