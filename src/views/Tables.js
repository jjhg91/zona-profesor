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
import ButtonMateria from "components/Materias/ButtonMateria";
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
                <Table responsive className="table-hover table-striped">
                  <thead className="text-primary">
                    <tr>
                      <th>Especialdiad</th>
                      <th>Materia</th>
                      <th>Turno</th>
                      <th>Periodo</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Informatica</td>
                      <td>Base de Datos</td>
                      <td>Sabado</td>
                      <td>2022-2</td>
                      <td>
                        <ButtonMateria />
                      </td>
                    </tr>
                    <tr>
                      <td>Informatica</td>
                      <td>Lenguaje de Programacion</td>
                      <td>Sabado</td>
                      <td>2022-2</td>
                      <td>
                        <ButtonMateria />
                      </td>
                    </tr>
                    <tr>
                      <td>Informatica</td>
                      <td>Logica</td>
                      <td>Mañana</td>
                      <td>2022-2</td>
                      <td>
                        <ButtonMateria />
                      </td>
                    </tr>
                    <tr>
                      <td>Administracion de Personal</td>
                      <td>Derecho</td>
                      <td>Sabado</td>
                      <td>2022-2</td>
                      <td>
                        <ButtonMateria />
                      </td>
                    </tr>
                    <tr>
                      <td>Informatica</td>
                      <td>Programacion</td>
                      <td>Sabado</td>
                      <td>2022-2</td>
                      <td>
                        <ButtonMateria />
                      </td>
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
