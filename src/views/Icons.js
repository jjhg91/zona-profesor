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
import ButtonAddPlan from "components/Materias/ButtonAddPlan";
import ModalPlanDelete from "components/Materias/ModalPlanDelete";
import ModalPlanForm from "components/Materias/ModalPlanForm";
import ModalNotas from "components/Materias/ModalNotas";
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
  Button,
} from "reactstrap";

function Icons() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle tag="h5">Lenguaje de Programacion</CardTitle>
                <p className="card-category">
                  <span>
                    <strong>Especialidad:</strong> Informatica.
                  </span>
                  <br />
                  <span>
                    <strong>Turno:</strong> Sabatino
                  </span>
                  <br />
                  <span>
                    <strong>Periodo:</strong> 2022-2
                  </span>
                </p>
              </CardHeader>
              <CardBody className="all-icons">
                <div id="tables">
                  <section id="plan">
                    <hr></hr>
                    <h6 className="">Plan de Evaluacion</h6>

                    <ModalPlanForm title="Añadir Actividad" edit={false} />

                    <Table responsive className="table-hover table-striped">
                      <thead className="text-primary">
                        <tr>
                          <th>N°</th>
                          <th>Contenido</th>
                          <th>Actividad</th>
                          <th>Ponderacion</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Variables</td>
                          <td>Informe</td>
                          <td>20%</td>
                          <td>
                            <ModalPlanForm title="Edit" />
                            <ModalPlanDelete />
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Condicionales</td>
                          <td>Trabajo</td>
                          <td>20%</td>
                          <td>
                            <ModalPlanForm title="Edit" edit={true} />
                            <ModalPlanDelete />
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Funciones</td>
                          <td>Prueba</td>
                          <td>25%</td>
                          <td>
                            <ModalPlanForm title="Edit" edit={true} />
                            <ModalPlanDelete />
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Clases</td>
                          <td>Prueba</td>
                          <td>25%</td>
                          <td>
                            <ModalPlanForm title="Edit" edit={true} />
                            <ModalPlanDelete />
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Objetos</td>
                          <td>Prueba</td>
                          <td>30%</td>
                          <td>
                            <ModalPlanForm title="Edit" edit={true} />
                            <ModalPlanDelete />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            <strong>TOTAL</strong>
                          </td>
                          <td></td>
                          <td>
                            <strong>100%</strong>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </section>
                  <section id="nota">
                    <hr></hr>
                    <h6>Estudiantes</h6>
                    <ModalNotas title="Cargar Notas" edit={false} />
                    <Table responsive className="table-hover table-striped">
                      <thead className="text-primary">
                        <tr>
                          <th>Estudiante</th>
                          <th>Act. 1 (20%)</th>
                          <th>Act. 2 (20%)</th>
                          <th>Act. 3 (20%)</th>
                          <th>Act. 4 (20%)</th>
                          <th>Act. 5 (20%)</th>
                          <th>Definitiva</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Rafael Rodriguez <br />
                            C.I: 24530760
                          </td>
                          <td>15</td>
                          <td>12</td>
                          <td>15</td>
                          <td>20</td>
                          <td>12</td>
                          <td>16</td>
                          <td>
                            <ModalNotas title="Edit" edit={true} />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Ernesto Arteagaaaaa <br />
                            C.I: 24698214
                          </td>
                          <td>15</td>
                          <td>12</td>
                          <td>15</td>
                          <td>13</td>
                          <td>12</td>
                          <td>14</td>
                          <td>
                            <ModalNotas title="Edit" edit={true} />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </section>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Icons;
