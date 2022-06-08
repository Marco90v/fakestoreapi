import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/Context";

const Login = () => {
    const { dispatch } = useContext(userContext);
    const navigate = useNavigate();

    const user = useRef();
    const pass = useRef();
    const [visiblePass, setVisiblePass] = useState(false);
    const [loading, setLoading] = useState(false);

    const loginSession = async () => {
        try {
            setLoading(true);
            const session = await fetch('https://fakestoreapi.com/users/1',{
                cache: 'no-cache',
                referrerPolicy: "unsafe-url"
              }).then(res=>res.json());
            dispatch({type:'login',session});
            navigate("/fakestoreapi", { replace: true });
        } catch (error) {
            console.log('Error de peticion Fetch');
        }
        setLoading(false);
    }

    const submittion = (e) => {
        e.preventDefault();
        loginSession();
    }
    
    return(
        <div className="login">
            <form onSubmit={submittion}>
                <label htmlFor="">User Name</label>
                <input ref={user} type="text" name="user" id="user" value={'johnd'} disabled />
                <label htmlFor="">Password</label>
                <input ref={pass} type={visiblePass ? "text" : "password"} name="ass" id="pass" value={'m38rmF$'} disabled />
                <div className="eyes" onClick={()=>setVisiblePass(!visiblePass)}>
                    {
                        visiblePass ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                            </svg>
                    }
                </div>
                <button className={!loading && "enable"} type="submit" disabled={loading}>Login</button>
            </form>
        </div>
    );
}

export default Login;