import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext';
import { useForm } from "react-hook-form";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import cupcake from "../assets/cupcake.svg";


const CheckOut = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { cartArray, vaciarCart, sumaTotalCart } = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cartArray,
            total: sumaTotalCart()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCart()
            .catch((error) => console.error(error))
            .finally()
            })

    }

    
    if (pedidoId) {
        return (
            <div className="container"  style={  {display:'block',
                                                 textAlign: 'center',
                                                 margin:' 0 auto',
                                                 height:'85.5vh',
                                                 paddingTop:'10%'}}>
                <img src={cupcake} width={180} />  
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }
    
  return (
    <div style={{height:'85.5vh'}}>
        <h2 className="main-titulo" style={{textAlign:'center', padding:'5px'}}>Finalizar Compra</h2>,
        <Container style={{display:'flex', 
                        backgroundColor:'white',
                           justifyContent:'center',
                           border:'1px solid',
                           fontWeight:'bold',
                           width:'40%',
                           padding: '10px 10px'}}>
            <Form style={{width:'500px'}} onSubmit={handleSubmit(comprar)}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridText">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre" {...register("nombre")}/>
                </Form.Group>

            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" {...register("email")}/>
                </Form.Group>

            </Row>

            <Form.Group className="mb-3" controlId="formGridPhone">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="phone" placeholder="Ingresa tu telefono" {...register("telefono")} />
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit" style={{display:'block',float:'right'}} >Comprar</Button>
            </Form>
        </Container>
    </div>
  )
}

export default CheckOut
