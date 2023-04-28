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
import React, { useState, useEffect } from "react";
import * as Axios from "axios";
import ButtonRegistroEvaluacion from "components/Materias/ButtonRegistroMateria";
import ButtonActaEvaluacion from "components/Materias/ButtonActaMateria";
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
import useUser from "hooks/useUser";
function TableAll() {
  const { jwt } = useUser();
  const [materias, setMaterias] = useState();

  const getMaterias = async () => {
    const url = `${process.env.REACT_APP_API_URL}/materia/getAll/`;
    await Axios.get(url, {
      headers: {
        Authorization: jwt,
      },
    }).then((res) => {
      setMaterias(res.data);
    });
  };

  useEffect(() => {
    getMaterias();
  }, []);
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Descarga De Planillas De todos los Cursos</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive className="table-hover table-striped">
                  <thead className="text-primary">
                    <tr>
                      <th>Especialdiad</th>
                      <th>Materia</th>
                      <th>Turno</th>
                      <th>Periodo</th>
                      <th>Estatus</th>
                      <th>Registro Evaluaciones</th>
                      <th>Acta de Evaluacion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!materias
                      ? ""
                      : materias.map((materia, index) => {
                          return (
                            <tr key={index}>
                              <td>{materia.especialidad}</td>
                              <td>{(materia.codMateria=="TBC330")?materia.nombre+" I":(materia.codMateria=="TBC440")?materia.nombre+" II":(materia.codMateria=="TBC540")?materia.nombre+" III":materia.nombre}</td>
                              <td>
                                {materia.turno === "1" ? "Mañana" : materia.turno === "5" ? "Sabado" : materia.turno === "6" ? "Online" : "Desconocido"}
                              </td>
                              <td>{materia.periodo}</td>
                              <td>
                                {materia.cerrada === false ? (
                                  <span className="bg-success p-2 text-white font-weight-bold">
                                    Abierta
                                  </span>
                                ) : (
                                  <span className="bg-danger p-2 text-white font-weight-bold">
                                    Cerrada
                                  </span>
                                )}
                              </td>
                              <td>
                                <ButtonRegistroEvaluacion
                                  especialidad={materia.codEspecialidad}
                                  materia={materia.codMateria}
                                  turno={materia.turno}
                                  periodo={materia.periodo}
                                  id={materia.creditos}
                                />
                                </td>
                              <td>
                                <ButtonActaEvaluacion
                                  especialidad={materia.codEspecialidad}
                                  materia={materia.codMateria}
                                  turno={materia.turno}
                                  periodo={materia.periodo}
                                  id={materia.creditos}
                                />
                              </td>
                            </tr>
                          );
                        })}
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
export default TableAll;
