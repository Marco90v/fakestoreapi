import Like from "./Like";

const Card = ({item}) => {
    const {image,title,price} = item;
    
    return(
        <li>
            <picture>
                <img src={image} alt={title} />
            </picture>
            <div className="datos">
                <h2 className="nameProduct">{title}</h2>
                <p className="priceProduct">{price} $</p>
                <Like />
            </div>
        </li>
    );
}

export default Card;