/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import ModalUser from "components/User/ModalUser";
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function User() {
  return (
    <>
      <div className="content">
        <Card className="card-user">
          <div className="image">
            <img
              alt="..."
              src={require("assets/img/damir-bosnjak.jpg").default}
            />
          </div>
          <CardBody>
            <div className="author">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img
                  alt="..."
                  className="avatar border-gray"
                  src={require("assets/img/mike.jpg").default}
                />
                <h5 className="title">Rafael Rodriguez</h5>
              </a>
              <p className="description">
                <strong>Profesor</strong>
              </p>
            </div>
            <p className="description text-center">
              <span>
                <strong>Cedula: </strong>24530760
              </span>
              <br />
              <span>
                <strong>Correo: </strong>rodriguez2017rafael@gmail.com
              </span>
              <br />
              <span>
                <strong>Telefono: </strong>04125552233
              </span>
              <br />
              <span>
                <strong>Direccion: </strong>Urbanizacion Santa Rosa. Cua, Estado
                Miranda
              </span>
            </p>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="button-container">
              <Row>
                <Col className="m-auto" lg="12" md="12" xs="12">
                  <ModalUser />
                </Col>
              </Row>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default User;
