import { useContext } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../context/Context";

const Details = () => {
    const { id } = useParams();
    const { state } = useContext(userContext);

    const getProdut = () => state.products.filter(item => item.id === Number(id))[0];

    // console.log(getProdut())

    const {image, title, description, category, price, rating:{rate, count}} = getProdut();

    // console.log(rating);

    return(
        <div className="details">
            <picture>
                <img src={image} alt={title} />
            </picture>
            <div className="detail">
                <label htmlFor="">Title</label>
                <h2>{title}</h2>
                <label htmlFor="">Description</label>
                <p>{description}</p>
                <label htmlFor="">Category</label>
                <p>{category}</p>
                <label htmlFor="">Price</label>
                <p>$ {price}</p>
                <label htmlFor="">Rate</label>
                <p>{rate}</p>
                <label htmlFor="">Count</label>
                <p>{count}</p>
                {
                    state.user !== undefined &&
                    <>
                        <input type="number" name="unidad" id="unidad" defaultValue={1} />
                        <button>Add</button>
                    </>
                }
            </div>
        </div>
    );
}
export default Details;