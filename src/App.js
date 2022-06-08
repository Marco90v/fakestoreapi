import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { userContext } from './context/Context';
import Header from './components/Header';
import Home from './view/Home';
import Product from './components/Product';
import Login from './view/Login';
import User from './view/User';
import Details from './view/Details';
import Footer from './components/Footer';

function App() {
  const { dispatch } = useContext(userContext);
  
  const getProducts =  async () => {
    const rest = await fetch('https://fakestoreapi.com/products',{ 
      cache: 'no-cache',
      referrerPolicy: "unsafe-url"
    }).then(e=>e.json());
    dispatch({type:"newData", data:rest});
  };

  const getCategorys =  async () => {
    const rest = await fetch('https://fakestoreapi.com/products/categories',{
      cache: 'no-cache',
      referrerPolicy: "unsafe-url"
    }).then(e=>e.json());
    dispatch({type:"newCategorys", categorys:rest});
  };

  useEffect(() => {
      getCategorys();
      getProducts();
    return () => {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="fakestoreapi/" element={<Home />} />
        <Route path="fakestoreapi/product/:category" element={<Product />} />
        <Route path="fakestoreapi/login" element={<Login />} />
        <Route path="fakestoreapi/user" element={<User />} />
        <Route path="fakestoreapi/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
