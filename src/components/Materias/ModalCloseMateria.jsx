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
  const codEspecialidad = props.codEspecialidad;
  const codMateria = props.codMateria;
  const codTurno = props.codTurno;
  const periodo = props.periodo;
  const getMateria = props.getMateria;
  const [disabledButton, setDisabledButton] = useState(false);

  const onCloseMateria = (e) => {
    setDisabledButton(true);
    const url = `${process.env.REACT_APP_API_URL}/materia/close/${codEspecialidad}/${codMateria}/${codTurno}/${periodo}`;
    Axios.get(url, {
      headers: {
        Authorization: jwt,
      },
    })
      .then((res) => {
        getMateria();
        toggle();
        setDisabledButton(false);
      })
      .catch((err) => {
        setDisabledButton(false);
      });
  };
  return (
    <>
      <Button color="danger" size="sm" className="m-4" onClick={toggle}>
        Envio de notas y cierre de curso
      </Button>

      <Modal size="xl" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Envio de notas y cierre de curos
        </ModalHeader>
        <ModalBody>
          <p>
            Al momento de realizar la accion de enviar las notas el curso se
            cerrara y no podra editar mas las notas ni las actividades del plan
            de evaluacin <br />
            SEsta Completamente seguro que las notas que desea enviar son las
            correctas?
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            disabled={disabledButton}
            onClick={(e) => onCloseMateria(e)}
            type="submit"
          >
            Enviar
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
