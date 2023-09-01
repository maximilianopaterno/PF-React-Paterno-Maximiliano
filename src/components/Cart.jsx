import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import EmptyCart from './emptyCart';

const Cart = () => {
  const { cartArray, borrarItem, sumaTotalCart, vaciarCart } = useContext(CartContext);

  return (
        (cartArray.length === 0) ?
        <EmptyCart /> :
        <div >
          <h3 style={{ display: "flex", justifyContent: "center", paddingTop:'5px'}}>Productos Seleccionados</h3>,
          <hr />
          {(cartArray.length > 0) && cartArray.map (prod => <CartItem key={prod.id} item={prod} borrarItem={borrarItem} />)}
          <Container style={{display: 'flex', justifyContent: 'space-evenly', paddingTop:'15px', height:'57.5vh'}}>
            <Link><Button variant='danger' style={{width:'250px'}} onClick= {() => vaciarCart()}>Vaciar Carro  </Button></Link> 
            <Link to="/"><Button style={{width:'250px'}} variant="warning">¿Desea continuar comprando?</Button></Link>
            <h3>Precio Total: $ {sumaTotalCart()}</h3> 
            <Link to="/checkout"><Button style={{width:'250px'}} variant="success">Finalizar compra</Button></Link>
          </Container>
        </div>
  )
}

export default Cart
