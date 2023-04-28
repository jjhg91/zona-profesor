import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

import { useState } from "react";
import * as Axios from "axios";
import useUser from "hooks/useUser";

const ModalUser = (props) => {
  const { jwt } = useUser();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  //props.user;
  const [user, setUser] = useState({
    cedula: props.user.cedula,
    nombre: props.user.nombre,
    apellido: props.user.apellido,
    correo: props.user.correo,
    telefono: props.user.telefono,
    direccion: props.user.direccion,
  });

  const handle = (e) => {
    const newUser = { ...user };
    newUser[e.target.id] = e.target.value;
    setUser(newUser);
  };

  const submit = (e) => {
    console.log(user);
    e.preventDefault();

    const url = `${process.env.REACT_APP_API_URL}/profesor/`;
    Axios.put(url, user, {
      headers: {
        Authorization: jwt,
      },
    }).then((res) => {
      props.getUser();
    });
  };

  return (
    <>
      <Button
        color="primary"
        className="mr-1 float-left"
        size="small"
        onClick={toggle}
      >
        Editar Perfil
      </Button>

      <Modal size="xl" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Editar Perfil</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => submit(e)} id="formUser">
            <Row>
              <Col className="pr-1" md="12">
                <FormGroup>
                  <label>Cedula (disabled)</label>
                  <Input
                    defaultValue={user.cedula}
                    disabled
                    placeholder="Cedula"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label>Nombres</label>
                  <Input
                    id="nombre"
                    name="nombre"
                    defaultValue={user.nombre}
                    onChange={(e) => handle(e)}
                    placeholder="Nombres"
                    type="text"
                  />
                </FormGroup>
              </Col>

              <Col className="pr-1" md="6">
                <FormGroup>
                  <label>Apellidos</label>
                  <Input
                    id="apellido"
                    name="apellido"
                    defaultValue={user.apellido}
                    onChange={(e) => handle(e)}
                    placeholder="Apellidos"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="exampleInputEmail1">Correo Electronico</label>
                  <Input
                    id="correo"
                    name="correo"
                    defaultValue={user.correo}
                    placeholder="Email"
                    type="email"
                  />
                </FormGroup>
              </Col>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="exampleInputEmail1">Telefono Celular</label>
                  <Input
                    id="telefono"
                    name="telefono"
                    defaultValue={user.telefono}
                    onChange={(e) => handle(e)}
                    placeholder="Telefono Celular"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <FormGroup>
                  <label>Direccion</label>
                  <Input
                    id="direccion"
                    name="direccion"
                    onChange={(e) => handle(e)}
                    type="textarea"
                    placeholder="Ingrese su direccion incluyendo (direccion. municipio, estado. pais)"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={toggle}
            form="formUser"
            type="submit"
          >
            Actualizar
          </Button>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalUser;
