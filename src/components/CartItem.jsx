import React from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';

export const CartItem = ({item, borrarItem}) => {
  return (
      <Card.Body>  
        <Container>
          <Row>
            <Col>
                <Card.Title>{item.nombre}</Card.Title>
            </Col>
            <Col>
                <Card.Text> Precio unitario: ${item.precio} </Card.Text>
            </Col>
            <Col>
                <Card.Text> Cantidad: {item.count} </Card.Text>
            </Col>
            <Col>
                <Card.Text> Precio Total: ${(item.precio)*(item.count)} </Card.Text>
            </Col>
            <Col>
                <Button variant='outline-danger' onClick= {() => borrarItem(item.id)}> Borrar </Button>
            </Col>
          </Row>  
        </Container>
        <hr />
      </Card.Body>  
  )
}

