import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../context/Context";
import noImage from "../assets/Sin_datos.jpg";

const initialState = {
    "id": 0,
    "title": "",
    "price": 0,
    "description": "",
    "category": "",
    "image": "",
    "rating": {
        "rate": 0,
        "count": 0
    }
}

const Details = () => {
    const { id } = useParams();
    const { state, dispatch } = useContext(userContext);
    const inputNumber = useRef()
    const [data, setData] = useState(initialState);
    const [countProduct, setCountProduct] = useState(0);

    const validInput = (e) => inputNumber.current.value = e.target.value < 1 ? 1 : e.target.value;

    const getProductCart = () => {
        const objeto = state.cart.filter(item => item.id === Number(id));
        const total = objeto.length > 0 ? objeto[0].count : 0
        setCountProduct(total);
    }

    const addCart = () => {
        dispatch( {type:'addCart', newProduct: {id:Number(id), count: Number(inputNumber.current.value)} } );
    }

    const deleteCart = () => {
        dispatch( {type:'deleteCart', product: Number(id) } );
    }

    const getProductId = async () => {
        const rest = await fetch(`https://fakestoreapi.com/products/${id}`,{
            cache: 'no-cache',
            referrerPolicy: "unsafe-url"
          }).then(item=>item.json());
        setData(rest);
        getProductCart();
    }   

    useEffect(() => {
        getProductId();
      return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getProductCart();
      return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);
    

    return(
        <div className="details">
            <picture>
                <img src={data.image || noImage} alt={data.title} />
            </picture>
            <div className="detail">
                <label htmlFor="">Title</label>
                <h2>{data.title}</h2>
                <label htmlFor="">Description</label>
                <p>{data.description}</p>
                <label htmlFor="">Category</label>
                <p>{data.category}</p>
                <label htmlFor="">Price</label>
                <p>$ {data.price}</p>
                <label htmlFor="">Rate</label>
                <p>{data.rating.rate}</p>
                <label htmlFor="">Count</label>
                <p>{data.rating.count}</p>
                {
                    state.user !== undefined &&
                    <>
                        <input ref={inputNumber} type="number" name="unidad" id="unidad" defaultValue={1} onChange={validInput} />
                        <button className={countProduct === 0 ? 'add enable' : 'add'} onClick={addCart} disabled={countProduct > 0 ? true : false} >Add</button>
                        {
                            countProduct > 0 && 
                            <>
                                <label><span>{countProduct}</span> units added</label>
                                <button className="enable delete" onClick={deleteCart} >Delete</button>
                            </>
                        }
                    </>
                }
            </div>
        </div>
    );
}
export default Details;