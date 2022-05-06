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

const ModalUser = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Button color="primary" className="mr-1" onClick={toggle}>
        Editar Perfil
      </Button>

      <Modal size="xl" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Editar Perfil</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col className="pr-1" md="12">
                <FormGroup>
                  <label>Cedula (disabled)</label>
                  <Input
                    defaultValue="24530760"
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
                    defaultValue="michael23"
                    placeholder="Username"
                    type="text"
                  />
                </FormGroup>
              </Col>

              <Col className="pr-1" md="6">
                <FormGroup>
                  <label>Apellidos</label>
                  <Input
                    defaultValue="michael23"
                    placeholder="Username"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="exampleInputEmail1">Correo Electronico</label>
                  <Input placeholder="Email" type="email" />
                </FormGroup>
              </Col>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label htmlFor="exampleInputEmail1">Telefono Celular</label>
                  <Input placeholder="Celular" type="email" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <FormGroup>
                  <label>Contraseña</label>
                  <Input placeholder="Contraseña" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <FormGroup>
                  <label>Direccion</label>
                  <Input
                    type="textarea"
                    placeholder="Ingrese su direccion incluyendo (direccion. municipio, estado)"
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
            form="productForm"
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
