import { useContext } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../context/Context";
import Card from "./Card";

const Product = () => {
    const { category } = useParams(); // undefined si no tiene parametro
    const { state } = useContext(userContext);

    const filterCategory = () => {
        return category === undefined || category === 'all' ?
        state.products :
        state.products.filter(item=>item.category === category);
    }

    // const fave = () => {
    //     console.log('fave');
    // }
    
    return(
        <div className="listProduct" style={category !== undefined ? {paddingTop: '7rem'} : undefined}>
            <ul>
                {
                    filterCategory().map(item=>{
                        return(
                            // <li key={item.id}>
                            //     <picture>
                            //         <img src={item.image} alt={item.title} />
                            //     </picture>
                            //     <div className="datos">
                            //         <h2 className="nameProduct">{item.title}</h2>
                            //         <p className="priceProduct">{item.price} $</p>
                            //         <div className="like" onClick={fave}>
                            //             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            //                 <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            //             </svg>
                            //             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                            //                 <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            //             </svg>
                            //         </div>
                            //     </div>
                            // </li>
                            <Card key={item.id} item={item} />
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Product;