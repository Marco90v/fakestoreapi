import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = useCallback( () => {
        setWidth(window.innerWidth);
        width > 1000 && setToggle(false);
    },[width]);

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
                <li><Link to='Product/all'>All Products</Link></li>
                <li><Link to='Product/electronics'>Electronics</Link></li>
                <li><Link to='Product/jewelery'>Jewelery</Link></li>
                <li><Link to='Product/menClothing'>Men's clothing</Link></li>
                <li><Link to='Product/womenClothing'>Women's clothing</Link></li>
                <li><Link to='Login'>Login</Link></li>
            </ul>
        </header>
    );
}

export default Header;