import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/Context";

const User = () => {
    const { state, dispatch } = useContext(userContext);
    const {name:{firstname,lastname},username,email,address:{city,street}} = state.user;
    const navigate = useNavigate();

    const signOff = () => {
        // console.log('Cerrar sesion');
        dispatch({type:'signOff'});
        navigate("/", { replace: true });
    }

    return(
        <div className="user">
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
    );
}
export default User;