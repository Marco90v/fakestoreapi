import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './view/Home';
import Product from './components/Product';
import { useContext, useEffect } from 'react';
import { userContext } from './context/Context';

function App() {
  const { dispatch } = useContext(userContext);
  
  const getProducts =  async () => {
    const rest = await fetch('https://fakestoreapi.com/products').then(e=>e.json());
    dispatch({type:"newData", data:rest});
  };
  
  const getCategorys =  async () => {
    const rest = await fetch('https://fakestoreapi.com/products/categories').then(e=>e.json());
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
        <Route path="/" element={<Home />} />
        <Route path="/product/:category" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
