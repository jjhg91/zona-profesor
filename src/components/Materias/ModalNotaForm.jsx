import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

import { useEffect, useState } from "react";
import * as Axios from "axios";

import useUser from "hooks/useUser";

const ModalNotaForm = (props) => {
  const { jwt } = useUser();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const title = props.title;
  const edit = props.edit;
  const materia = props.materia;
  const getMateria = props.getMateria;
  const planEvaluacion = props.planEvaluacion;
  const notas = !props.notas ? [] : props.notas;
  const estudiante = !props.estudiante ? null : props.estudiante;
  const estudiantes = !props.estudiantes ? [] : props.estudiantes;
  const [calificacion, setCalificacion] = useState();

  const initCalificacion = async (estu, nott) => {
    if (estu.length) {
      var newCalificaciones = [];
      estu.forEach((est) => {
        var newNotas = [];
        // nott.forEach((not) => {
        //   if (est.cedula[0] === not.cedula[0]) {
        //     newNotas.push({ actividad: not.id_actividad[0], nota: not.nota });
        //   }
        // });
        planEvaluacion.forEach((plan, index) => {
          const bb = notas.find((nota) => {
            return (
              est.cedula[0] === nota.cedula[0] &&
              plan.id_actividad[0] === nota.id_actividad[0]
            );
          });
          newNotas.push({
            cedula: est.cedula,
            curso: null,
            especialidad: null,
            id_actividad: plan.id_actividad,
            id_estudia: est.id_estudia,
            nota: !bb ? "" : bb.nota,
            p_apellido: est.p_apellido,
            p_nombre: est.p_nombre,
            periodo: null,
            s_apellido: est.s_apellido,
            s_nombre: est.s_nombre,
            turno: null,
          });
        });
        newCalificaciones.push({
          cedula: est.cedula[0],
          notas: newNotas,
        });
      });
      setCalificacion(newCalificaciones);
    }
  };

  const handle = (e, cedula, actividad, index) => {
    const alumno = calificacion.find((busqueda) => busqueda.cedula === cedula);
    const newCalificacion = calificacion.map((cal) => {
      if (
        cal.cedula === cedula &&
        cal.notas[index].id_actividad[0] === actividad
      ) {
        cal.notas[index].nota =
          e.target.value > 20 ? 20 : e.target.value < 0 ? 0 : e.target.value;
      }

      return cal;
    });
    setCalificacion(newCalificacion);
  };

  const submit = (e) => {
    e.preventDefault();
    if (edit === true) {
      const url = `http://apizp.iutjmc.com.ve/api/nota/`;
      Axios.put(
        url,
        {
          materia: materia,
          planEvaluacion: planEvaluacion,
          calificaciones: calificacion,
        },
        {
          headers: {
            Authorization: jwt,
          },
        }
      ).then((res) => {
        getMateria();
      });
    }
    if (edit === false) {
      const url = `http://apizp.iutjmc.com.ve/api/nota/`;
      Axios.post(
        url,
        {
          materia: materia,
          planEvaluacion: planEvaluacion,
          calificaciones: calificacion,
        },
        {
          headers: {
            Authorization: jwt,
          },
        }
      ).then((res) => {
        getMateria();
      });
    }
  };

  useEffect(() => {
    initCalificacion(estudiantes, notas);
  }, [estudiantes, notas, planEvaluacion]);

  return (
    <>
      <Button color="primary" size="sm" className="mr-1" onClick={toggle}>
        {title}
      </Button>

      <Modal size="xl" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {edit === false ? title : "Editar Notas"}
        </ModalHeader>
        <ModalBody>
          <form onSubmit={(e) => submit(e)} id="notasForm">
            <Table responsive className="table-hover table-striped">
              <thead className="text-primary">
                <tr>
                  <th>Estudiante</th>
                  {!planEvaluacion
                    ? ""
                    : planEvaluacion.map((plan, index) => {
                        return (
                          <th key={`plan${index}`}>
                            Act. {`${plan.id_actividad} (${plan.ponderacion}%)`}{" "}
                          </th>
                        );
                      })}
                  <th>Definitiva</th>
                </tr>
              </thead>
              <tbody>
                {!estudiantes
                  ? ""
                  : estudiantes.map((estudiante, indexEst) => {
                      var defi = 0;
                      const tdNotas = planEvaluacion.map((plan, indexNotas) => {
                        if (calificacion && estudiante && plan) {
                          var nn = !calificacion[indexEst].notas[indexNotas]
                            ? "0"
                            : calificacion[indexEst].notas[indexNotas].nota;
                          defi = defi + (nn * plan.ponderacion) / 100;
                          var cal = nn;
                        } else {
                          var cal = "";
                        }
                        return (
                          <td key={`inputNota${indexNotas}`}>
                            <Input
                              type="number"
                              name="contenido"
                              id="contenido"
                              max="20"
                              min="0"
                              value={cal}
                              onChange={(e) =>
                                handle(
                                  e,
                                  estudiante.cedula[0],
                                  plan.id_actividad[0],
                                  indexNotas
                                )
                              }
                            />
                          </td>
                        );
                      });

                      return (
                        <tr key={`estudiante${indexEst}`}>
                          <td>
                            <span>
                              {`${estudiante.p_nombre} ${estudiante.s_nombre}, ${estudiante.p_apellido} ${estudiante.s_apellido}`}
                            </span>{" "}
                            <br />
                            <span>C.I: {estudiante.cedula}</span>
                          </td>
                          {tdNotas}

                          <td>{defi}</td>
                        </tr>
                      );
                    })}
              </tbody>
            </Table>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={toggle}
            form="notasForm"
            type="submit"
          >
            Guardar
          </Button>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalNotaForm;
