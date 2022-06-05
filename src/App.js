import './App.css';
import Header from './components/Header';
import Home from './view/Home';

import { Route, Routes } from 'react-router-dom';
import Product from './components/Product';

function App() {
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
