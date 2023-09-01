import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import "./navbar.css"

export const ItemCount = ({ stock, inicial , onAdd }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador <= stock) {
                setContador(contador+1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador-1);
        }
    }
  return (
    <>
    <div className='controlcontadores' style={{ width: '100%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '5px',
                                                paddingTop:'20px'
    }}>    
       <Button style={{width:'50px'}} onClick={decrementar}>-</Button>
       <h4 style={{width:'70px'}}>{contador} </h4>
       <Button style={{width:'50px'}} onClick={incrementar}>+</Button>
    </div>
    <div className='controlcontadores'style={{ width: '100%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: '5px'
    }}>    
        <Button variant='success' style={{width:'150px'}} onClick={() => onAdd(contador)}>Añadir al carrito</Button>
    </div>
    </>
        );
}