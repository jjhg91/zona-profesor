/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import { useState, useEffect } from "react";
import * as Axios from "axios";
import {
  Button,
  Card,
  // CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  // Row,
  Col,
} from "reactstrap";

import { useHistory } from "react-router-dom";
import useUser from "hooks/useUser";

const Login = () => {
  let history = useHistory();
  const { isLogged, login, jwt } = useUser();
  const [user, setUser] = useState({
    cedula: "",
    password: "",
  });
  const handle = (e) => {
    const newStudent = { ...user };
    newStudent[e.target.id] = e.target.value;
    setUser(newStudent);
  };

  const submit = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/api/login/auth`;
    Axios.post(url, user).then((res) => {
      if (res.data) {
        login(res.data);
      }
    });
  };

  useEffect(() => {
    if (isLogged) {
      history.push("/admin/inicio");
    }
  }, [isLogged, jwt]);

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secundary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">Iniciar secion</div>
            <Form role="form" onSubmit={(e) => submit(e)}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText className="p-2 bg-primary">
                      <i className="nc-icon nc-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    id="cedula"
                    value={user.cedula}
                    onChange={(e) => handle(e)}
                    placeholder="Cedula"
                    type="text"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon
                    addonType="prepend"
                    className="
                  
                  bg-primary"
                  >
                    <InputGroupText className="p-2">
                      <i className="nc-icon nc-key-25" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    id="password"
                    value={user.password}
                    onChange={(e) => handle(e)}
                    placeholder="Contraseña"
                    type="password"
                  />
                </InputGroup>
              </FormGroup>

              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Iniciar
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
