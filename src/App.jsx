import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from './Context/CartContext';
import Contacto from './components/Contacto';
import Cart from './components/Cart';
import Checkout from './components/CheckOut';

function App() {

  return (
    <div className='App' style={{height:'100vh'}}>
      <CartProvider >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={ <ItemDetailContainer/>} />
            <Route path="/productos" element={ <ItemListContainer />} />
            <Route path="/productos/:categoria" element={ <ItemListContainer />} />
            <Route path="/contacto" element={ <Contacto />} />
            <Route path="/cart" element={ <Cart />} />
            <Route path="/checkOut" element={ <Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App