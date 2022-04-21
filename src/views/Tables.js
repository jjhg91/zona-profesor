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
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Materias Asignadas</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Especialdiad</th>
                      <th>Turno</th>
                      <th>Materia</th>
                      <th>cod</th>
                      <th>Periodo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Informatica</td>
                      <td>Sabado</td>
                      <td>Base de Datos</td>
                      <td>inf-bdd445</td>
                      <td>2022-2</td>
                    </tr>
                    <tr>
                      <td>Informatica</td>
                      <td>Sabado</td>
                      <td>Lenguaje de Programacion</td>
                      <td>inf-bdd445</td>
                      <td>2022-2</td>
                    </tr>
                    <tr>
                      <td>Informatica</td>
                      <td>Mañana</td>
                      <td>Logica</td>
                      <td>inf-bdd445</td>
                      <td>2022-2</td>
                    </tr>
                    <tr>
                      <td>Administracion de Personal</td>
                      <td>Sabado</td>
                      <td>Derecho</td>
                      <td>inf-bdd445</td>
                      <td>2022-2</td>
                    </tr>
                    <tr>
                      <td>Informatica</td>
                      <td>Sabado</td>
                      <td>Programacion</td>
                      <td>inf-bdd445</td>
                      <td>2022-2</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
