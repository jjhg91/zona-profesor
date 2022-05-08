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
import useUser from "hooks/useUser";

function Tables() {
  const { jwt } = useUser();
  const [materias, setMaterias] = useState();

  const getMaterias = async () => {
    const url = "http://apizp.iutjmc.com.ve/api/materia/";
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
                    {!materias
                      ? ""
                      : materias.map((materia, index) => {
                          return (
                            <tr key={index}>
                              <td>{materia.especialidad}</td>
                              <td>{materia.nombre}</td>
                              <td>{materia.turno}</td>
                              <td>{materia.periodo}</td>
                              <td>
                                <ButtonMateria materia={materia} />
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

export default Tables;
