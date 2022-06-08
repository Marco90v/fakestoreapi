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
    return(
        <div className="listProduct" style={category !== undefined ? {paddingTop: '7rem'} : undefined}>
            <ul>
                {
                    filterCategory().map(item=>{
                        return(
                            <Card key={item.id} item={item} />
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Product;