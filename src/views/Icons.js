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
import ModalPlanDelete from "components/Materias/ModalPlanDelete";
import ModalPlanForm from "components/Materias/ModalPlanForm";
import ModalNotaForm from "components/Materias/ModalNotaForm";
import ButtonRegistroEvaluacion from "components/Materias/ButtonRegistroEvaluacion";
import ButtonActaEvaluacion from "components/Materias/ButtonActaEvaluacion";
import ModalCloseMateria from "components/Materias/ModalCloseMateria";

import React, { useEffect, useState } from "react";
import * as Axios from "axios";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";
import { useParams } from "react-router";
import useUser from "hooks/useUser";

function Icons() {
  const { jwt } = useUser();
  let { codEspecialidad, codMateria, codTurno, periodo } = useParams();
  const [materia, setMateria] = useState();
  const [planEvaluacion, setPlanEvaluacion] = useState();
  const [estudiantes, setEstudiantes] = useState();
  const [notas, setNotas] = useState();
  const [ponderacionTotal, setPonderacionTotal] = useState(0);
  const [estudiantesCorregidosAll, setEstudiantesCorregidosAll] = useState(true);
  const [cantidadEvaluaciones, setCantidadEvaluaciones] = useState(0);
  const getMateria = async () => {
    const url = `${process.env.REACT_APP_API_URL}/materia/${codEspecialidad}/${codMateria}/${codTurno}/${periodo}`;
    await Axios.get(url, {
      headers: {
        Authorization: jwt,
      },
    }).then((res) => {
      setMateria(res.data.materia);
      setPlanEvaluacion(res.data.planesEvaluacion);
      setPonderacionTotal(
        res.data.planesEvaluacion.reduce((total, plan) => {
          return total + parseInt(plan.ponderacion);
        }, 0)
      );
      let contadorDeEvaluaciones=res.data.planesEvaluacion.reduce((sumaTotal, plan) => {
        return sumaTotal + 1;
      }, 0);
      setCantidadEvaluaciones(contadorDeEvaluaciones)
      setEstudiantes(res.data.estudiantes);
      setNotas(res.data.notas);
      for (let index = 0; index < res.data.estudiantes.length; index++) {
        const alumno =res.data.estudiantes[index];
        let evaluacionesCorregidasAlumno=0;
        for (let x = 0; x < res.data.notas.length; x++) {
          const calificacion = res.data.notas[x];
          if(alumno["cedula"][0]===calificacion["cedula"][0]){
            evaluacionesCorregidasAlumno++;
          } 
        }
        console.log(contadorDeEvaluaciones)
        if(evaluacionesCorregidasAlumno!=contadorDeEvaluaciones){
          setEstudiantesCorregidosAll(false);
          console.log(estudiantesCorregidosAll);
          break;
        }
      }

    });
  };

  useEffect(() => {
    getMateria();
  }, []);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="demo-icons">
              <CardHeader>
                {!materia ? (
                  ""
                ) : (
                  <>
                    <CardTitle tag="h5">{materia.nombre}</CardTitle>
                    <CardTitle tag="h5">Para poder Cargar las notas primero debe agregar todas las actividades y que estas sumen 100%</CardTitle>
                    <p className="card-category">
                      <span>
                        <strong>Especialidad:</strong> {materia.especialidad}
                      </span>
                      <br />
                      <span>
                        <strong>Turno:</strong>{" "}
                        {materia.turno === "1" ? "Mañana" : materia.turno === "5" ? "Sabado" : materia.turno === "6" ? "Online" : "Desconocido"}
                        
                      </span>
                      <br />
                      <span>
                        <strong>Periodo:</strong> {materia.periodo}
                      </span>
                      <br />
                      <span>
                        <strong>Estatus: </strong>{" "}
                        {materia["cerrada"] === false ? "Abierta" : "Cerrada"}
                      </span>
                    </p>

                    <div>
                      <ButtonRegistroEvaluacion
                        especialidad={codEspecialidad}
                        materia={codMateria}
                        turno={codTurno}
                        periodo={periodo}
                      />
                      <ButtonActaEvaluacion
                        especialidad={codEspecialidad}
                        materia={codMateria}
                        turno={codTurno}
                        periodo={periodo}
                      />
                      {((materia["cerrada"] === true) || (estudiantesCorregidosAll==false)) ? (
                        ""
                      ) : (
                        <ModalCloseMateria
                          codEspecialidad={codEspecialidad}
                          codMateria={codMateria}
                          codTurno={codTurno}
                          periodo={periodo}
                          getMateria={getMateria}
                        />
                      )}
                    </div>
                  </>
                )}
              </CardHeader>
              <CardBody className="all-icons">
                <div id="tables">
                  <section id="plan">
                    <hr></hr>
                    <h6 className="">Plan de Evaluacion</h6>
                    {ponderacionTotal >= 100 ||
                    (materia && materia["cerrada"] === true) ? (
                      ""
                    ) : (
                      <ModalPlanForm
                        title="Añadir Actividad"
                        edit={false}
                        materia={materia}
                        getMateria={getMateria}
                        ponderacionTotal={ponderacionTotal}
                        planEvaluacion={planEvaluacion}
                      />
                    )}

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
                        {!planEvaluacion
                          ? ""
                          : planEvaluacion.map((plan, index) => {
                              return (
                                <tr key={`plan${index}`}>
                                  <td>{plan.id_actividad}</td>
                                  <td>{plan.contenido}</td>
                                  <td>{plan.actividad}</td>
                                  <td>{plan.ponderacion}%</td>
                                  <td>
                                    {materia && materia["cerrada"] === true ? (
                                      ""
                                    ) : (
                                      <>
                                        <ModalPlanForm
                                          title="Edit"
                                          edit={true}
                                          plan={plan}
                                          materia={materia}
                                          getMateria={getMateria}
                                          ponderacionTotal={ponderacionTotal}
                                          planEvaluacion={planEvaluacion}
                                        />
                                        <ModalPlanDelete
                                          plan={plan}
                                          materia={materia}
                                          getMateria={getMateria}
                                        />
                                      </>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}

                        <tr>
                          <td></td>
                          <td>
                            <strong>TOTAL</strong>
                          </td>
                          <td>
                            <strong>
                              {!planEvaluacion ? "" : planEvaluacion.length}
                            </strong>
                          </td>
                          <td>
                            <strong>{ponderacionTotal}%</strong>
                          </td>
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>
                  </section>
                  <section id="nota">
                    <hr></hr>
                    <h6>Estudiantes</h6>
                    {!notas ? (
                      ""
                    ):(ponderacionTotal!==100)?(
                      <h6 className="">Recuerda Que debes Colocar todas las actividades que den la suma del 100% para poder cargar las notas a tus alumnos.
                      </h6>
                    )
                     : (notas.length === 0 && ponderacionTotal===100) ? (
                      <ModalNotaForm
                        title="Cargar Notas"
                        edit={false}
                        materia={materia}
                        getMateria={getMateria}
                        planEvaluacion={planEvaluacion}
                        estudiantes={estudiantes}
                        notas={notas}
                      />
                    ) : (
                      ""
                    )}

                    <Table responsive className="table-hover table-striped">
                      <thead className="text-primary">
                        <tr>
                          <th>Estudiante</th>
                          {!planEvaluacion
                            ? ""
                            : planEvaluacion.map((plan, index) => {
                                return (
                                  <th key={`notaPlan${index}`}>
                                    Act.{" "}
                                    {`${plan.id_actividad} (${plan.ponderacion}%)`}
                                  </th>
                                );
                              })}
                          <th>Definitiva</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {!notas
                          ? ""
                          : estudiantes.map((estudiante, index) => {
                              const tdNotas = [];
                              var definitiva = null;
                              var inasistencias=0;
                              var noPresentadas=0;
                              planEvaluacion.forEach((plan, index) => {
                                const bb = notas.find((nota) => {
                                  return (
                                    estudiante.cedula[0] === nota.cedula[0] &&
                                    plan.id_actividad[0] ===
                                      nota.id_actividad[0]
                                  );
                                });
                                if (bb) {
                                  tdNotas.push(
                                    (bb.nota==0)?<td key={`nota${index}`}>NP</td>
                                    :(bb.nota==-1)?<td key={`nota${index}`}>I</td>
                                    :<td key={`nota${index}`}>{bb.nota}</td>
                                  );
                                  let notaTA=bb.nota;
                                  if(notaTA==-1){
                                    notaTA="0";
                                    inasistencias++;
                                  }
                                  else if(notaTA==0){
                                    notaTA="0";
                                    noPresentadas++;
                                  }
                                          definitiva =
                                    definitiva +
                                    (notaTA * plan.ponderacion) / 100;
                                } else {
                                  tdNotas.push(
                                    <td key={`nota${index}`}>S/C</td>
                                  );
                                }
                              });
                              // notas.forEach((nota, index) => {
                              //   if (estudiante.cedula[0] === nota.cedula[0]) {
                              //     if (nota.nota) {
                              //       tdNotas.push(
                              //         <td key={`nota${index}`}>{nota.nota}</td>
                              //       );
                              //       const pondera = planEvaluacion.find(
                              //         (plan) => {
                              //           return (
                              //             plan.id_actividad[0] ===
                              //             nota.id_actividad[0]
                              //           );
                              //         }
                              //       );
                              //       definitiva =
                              //         definitiva +
                              //         (nota.nota * pondera.ponderacion) / 100;
                              //     } else {
                              //       tdNotas.push(
                              //         <td key={`nota${index}`}>S/C</td>
                              //       );
                              //     }
                              //   }
                              // });
                              return (
                                <tr key={`estudiante${index}`}>
                                  <td>
                                    <span>
                                      {`${estudiante.p_nombre} ${estudiante.s_nombre}, ${estudiante.p_apellido} ${estudiante.s_apellido}`}
                                    </span>
                                    <br />
                                    <span>C.I: {estudiante.cedula}</span>
                                  </td>
                                  {tdNotas}

                                  <td>
                                    {(cantidadEvaluaciones==inasistencias)?"I":(cantidadEvaluaciones==noPresentadas)?"01":(definitiva && definitiva.toFixed(2)>=1) ? definitiva.toFixed(2) : "01"}
                                  </td>
                                  <td>
                                    {materia && materia["cerrada"] === true ? (
                                      ""
                                    ) :(ponderacionTotal===100)? (
                                      <ModalNotaForm
                                        title="Edit"
                                        edit={true}
                                        materia={materia}
                                        getMateria={getMateria}
                                        planEvaluacion={planEvaluacion}
                                        estudiantes={[estudiante]}
                                        notas={notas}
                                      />
                                    ):""}
                                  </td>
                                </tr>
                              );
                            })}
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
