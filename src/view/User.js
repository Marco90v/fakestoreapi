import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { userContext } from "../context/Context";

const User = () => {
    const { state, dispatch } = useContext(userContext);
    const {name:{firstname,lastname},username,email,address:{city,street}} = state.user;
    const navigate = useNavigate();

    const signOff = () => {
        dispatch({type:'signOff'});
        navigate("/fakestoreapi", { replace: true });
    }

    return(
        <div className="user">
            <div className="cart">
                <h2>Shopping cart</h2>
                <ul>
                    {
                        state.products.length > 0 &&
                            state.cart.length > 0 ?
                                state.cart.map(item=>{
                                    const product = state.products.filter(ele=>{
                                        return ele.id===item.id
                                    })[0]
                                    return <Card key={item.id} item={product} />
                                })
                                :
                                <span>No items</span>
                    }
                </ul>
            </div>
            <div className="likes">
                <h2>Favorites list</h2>
                <ul>
                    {
                        state.products.length > 0 &&
                            state.myFave.length > 0 ?
                                state.myFave.map(item=>{
                                    const product = state.products.filter(ele=>{
                                        return ele.id===item
                                    })[0]
                                    return <Card key={item} item={product} />
                                })
                                :
                                <span>No favorites</span>
                    }
                </ul>
            </div>
            <div className="datosUser">
                <h2>User Data</h2>
                <div className="firstname">
                    <label htmlFor="">Name</label>
                    <input type="text" disabled  value={firstname} />
                </div>
                <div className="lastname">
                    <label htmlFor="">Lastname</label>
                    <input type="text" disabled value={lastname} />
                </div>
                <div className="username">
                    <label htmlFor="">User Name</label>
                    <input type="text" disabled value={username} />
                </div>
                <div className="email">
                    <label htmlFor="">Email</label>
                    <input type="text" disabled value={email} />
                </div>
                <div className="address">
                    <label htmlFor="">Address</label>
                    <input type="text" disabled value={city +', '+street} />
                </div>
                <button onClick={signOff}>Sign off</button>
            </div>
        </div>
    );
}
export default User;