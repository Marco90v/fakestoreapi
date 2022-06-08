import { useCallback, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../context/Context";

const linkActiveStyle = {
    borderBottom: "1px solid black",
    fontWeigh: "bold"
};

const Header = () => {
    const { state } = useContext(userContext);
    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = useCallback( () => {
        setWidth(window.innerWidth);
        width > 1000 && setToggle(false);
    },[width]);

    const linkActive = ({isActive}) => isActive? linkActiveStyle : undefined;

    const capitalizeString = (str) => str[0].toUpperCase() + str.slice(1);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => { window.removeEventListener("resize", handleResize); };
      }, [handleResize]);

    return(
        <header>
            <div className="toggle" onClick={()=>setToggle(!toggle)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h1><NavLink to="fakestoreapi/" >Fake Storage</NavLink></h1>
            <ul className={(toggle && width < 1000) ? 'active' : ''}>
                <li><NavLink to="fakestoreapi/Product/all" style={ linkActive }>All Products</NavLink></li>
                {
                    state.categorys.map((item, index) => 
                        <li key={index}>
                            <NavLink 
                                to={`fakestoreapi/Product/${item.replace(' ', '%20')}`}
                                style={ linkActive }
                            >
                                {capitalizeString(item)}
                            </NavLink>
                        </li>
                    )
                }
                {
                    state.user ?
                    <li>
                        <NavLink to="fakestoreapi/user" style={ linkActive }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg> User
                        </NavLink>
                    </li>
                    :
                    <li><NavLink to="fakestoreapi/Login" style={ linkActive }>Login</NavLink></li>
                }
            </ul>
        </header>
    );
}

export default Header;