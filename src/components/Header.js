import { useCallback, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../context/Context";

const linkActiveStyle = {
    borderBottom: "1px solid black",
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
            <h1>Fake Storage</h1>
            <ul className={(toggle && width < 1000) ? 'active' : ''}>
                <li><NavLink to="Product/all" style={ linkActive }>All Products</NavLink></li>
                {
                    state.categorys.map((item, index) => 
                        <li key={index}>
                            <NavLink 
                                to={`Product/${item.replace(' ', '%20')}`}
                                style={ linkActive }
                            >
                                {capitalizeString(item)}
                            </NavLink>
                        </li>
                    )
                }
                <li><NavLink to="Login" style={ linkActive }>Login</NavLink></li>
            </ul>
        </header>
    );
}

export default Header;