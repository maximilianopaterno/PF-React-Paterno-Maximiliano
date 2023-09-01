import { Col, Container, Card, Button } from 'react-bootstrap';
import { ItemCount } from './ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({item, onAdd, added }) =>{
const cartContext = useContext(CartContext);
     return (
        <div style={{display:'flex', justifyContent: 'center', paddingTop: "2%",margin:'0 auto', width:'100%'}}>
            <div className='item' style={{ backgroundColor: "white",
                                           width: '60rem', 
                                           border: '2px solid',
                                           display: 'block',
                                           textAlign: 'center',
                                           padding:'10px'}}>
                <img src={item.img} style={{ width: '30rem', height:'20rem', border: '1px solid',float:'left' }}/>
                <div style={{display: "flex", gap: "1rem", flexWrap:" wrap", justifyContent:'center'}}>
                    <Card.Title style={{fontSize:'30px', fontWeight:'bold'}}>{item.nombre}</Card.Title>
                    <Card.Text style={{textAlign:'justify', padding:'15px'}}> {item.descripcion} </Card.Text>
                    <Card.Text style={{fontSize:'20px', fontWeight:'bold'}}> Precio: $ {item.precio} </Card.Text> 
                    <br />
                </div>
                    <Card.Text>Categoria: {item.categoria}  </Card.Text>
                <br />
                {added ? 
                <div>
                    <Button variant='success' style={{width:'200px', margin:'5px'}} ><Link style={{ color: "white", width:'800px', textDecoration:'none'}} to='/cart'>Ver el carrito </Link></Button>
                    <Button variant='warning' style={{width:'200px', margin:'5px'}} > <Link style={{ color: "black", width:'800px', textDecoration:'none'}} to='/'>¿Continuar comprando? </Link></Button>
                </div>
                :
                 <ItemCount stock={item.stock} inicial={1} onAdd={onAdd} />}
            </div>
        </div>
    )
}

export default ItemDetail















        /*
        <div className="container" >
            <div>
                <img src={item.img} />
                <div>
                    <h3 className="nombre">{item.nombre}</h3> 
                    <p className="descripcion"> {item.descripcion} </p>
                    <p className="categoria">Categoria: {item.categoria} </p>
                    <p className="precio">$ {item.precio} </p>
                </div>
            </div>
        </div>
        */
