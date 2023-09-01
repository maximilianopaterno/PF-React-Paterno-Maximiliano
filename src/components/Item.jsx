import { Link } from "react-router-dom";
import {Button, Card} from 'react-bootstrap';

const Item = ({producto}) =>{
    return (
      <Card style={{ width: '20rem' , padding:"1rem", margin: '1rem', border:'1px solid'}}>
        <Card.Img variant="top" src={producto.img} width='100px' height='200px' />
        <Card.Body style={{display: 'flex', flexFlow: 'column', justifyContent: 'space-evenly'}} >  
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text style={{textAlign:'center'}}> Precio: ${producto.precio} </Card.Text>
          <Button><Link style={{color:'white', textDecoration:'none'}} to={`/item/${producto.id}`}>Ver más</Link></Button>
        </Card.Body>
      </Card>
    )
}

export default Item