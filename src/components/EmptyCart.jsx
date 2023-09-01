import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cartvacio from "../assets/cartvacio.svg";

const EmptyCart = () => {
  return (
    <div style={{display:'block', textAlign: 'center', padding:'4%', height:'85.5vh'}}> 
        <img src={cartvacio} width={300} />
        <h3>El carrito se encuentra vacio</h3> 
        <Button style={{width:'200px', margin:'5px'}}><Link style={{ color: "white", width:'800px', textDecoration:'none'}}to='/'>Seccion Productos</Link></Button>
    </div>
  )
}

export default EmptyCart