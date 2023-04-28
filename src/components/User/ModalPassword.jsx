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
import * as Axios from "axios";
import { useState } from "react";
import useUser from "hooks/useUser";

const ModalUser = (props) => {
  const { jwt } = useUser();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [userPassword, setUserPassword] = useState({
    oldPassword: "",
    newPassword: "",
    verifyNewPassword: "",
  });

  const handle = (e) => {
    const newUserPassword = { ...userPassword };
    newUserPassword[e.target.id] = e.target.value;
    setUserPassword(newUserPassword);
    console.log(userPassword);
  };

  const submit = (e) => {
    console.log(userPassword);
    e.preventDefault();

    const url = `${process.env.REACT_APP_API_URL}/profesor/`;
    Axios.patch(url, userPassword, {
      headers: {
        Authorization: jwt,
      },
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <Button color="primary" className="mr-1 float-right" onClick={toggle}>
        Cambiar Contraseña
      </Button>

      <Modal size="xl" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Cambiar Contraseña</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => submit(e)} id="formPassword">
            <Row>
              <Col md="12">
                <FormGroup>
                  <label>Contraseña Actual</label>
                  <Input
                    placeholder="Contraseña"
                    name="oldPassword"
                    id="oldPassword"
                    onChange={(e) => handle(e)}
                    value={userPassword.oldPassword}
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col className="pr-1" md="6">
                <FormGroup>
                  <label>Nueva Contraseña</label>
                  <Input
                    placeholder="Nueva Contraseña"
                    name="newPassword"
                    id="newPassword"
                    onChange={(e) => handle(e)}
                    value={userPassword.newPassword}
                    type="text"
                  />
                </FormGroup>
              </Col>

              <Col className="pr-1" md="6">
                <FormGroup>
                  <label>Verificar la Nueva Contraseña</label>
                  <Input
                    placeholder="Verificar la Nueva Contraseña"
                    name="verifyNewPassword"
                    id="verifyNewPassword"
                    onChange={(e) => handle(e)}
                    value={userPassword.verifyNewPassword}
                    type="text"
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
            form="formPassword"
            type="submit"
          >
            Cambiar Contraseña
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
