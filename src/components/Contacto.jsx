import { useEffect } from "react";
import { Button, Container, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Contacto = () => {
    const { register, handleSubmit } = useForm();
    const enviar = (data) => {
        console.log(data);
    }

  return (
    <div className="contacto" style={{height:'85.5vh'}}>
    <h2 className="main-titulo" style={{textAlign:'center', padding:'5px'}}>Contactanos</h2>
    <div className="container" style={{ display:'flex', 
                                        backgroundColor:'white',
                                        justifyContent:'center',
                                        border:'1px solid',
                                        fontWeight:'bold',
                                        width:'45%',
                                        padding: '10px 10px'}}>
      <Form style={{width:'500px'}} onSubmit={handleSubmit(enviar)} >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridText">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nombre" {...register("nombre")}/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridText">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su apellido"{...register("apellido")} />
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

        <Button variant="primary" type="submit" style={{display:'block',float:'right'}}>Enviar</Button>
      </Form>
    </div>
    </div>
  )
}

export default Contacto