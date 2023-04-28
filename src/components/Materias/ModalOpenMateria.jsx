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
    const id=props.id;
    const getMaterias=props.getMaterias;
    const [disabledButton, setDisabledButton] = useState(false);
  
    const onCloseMateria = (e) => {
      setDisabledButton(true);
      const url = `${process.env.REACT_APP_API_URL}/materia/open/${codEspecialidad}/${codMateria}/${codTurno}/${periodo}/${id}`;
      Axios.get(url, {
        headers: {
          Authorization: jwt,
        },
      })
        .then((res) => {
          getMaterias()
          toggle();
          setDisabledButton(false);
        })
        .catch((err) => {
          setDisabledButton(false);
        });
    };
    return (
      <>
        <Button color="success" size="sm" className="m-4" onClick={toggle}>
          Volver a Abrir la Materia
        </Button>
  
        <Modal size="xl" isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            Abrir La Materia para corregir Errores
          </ModalHeader>
          <ModalBody>
            <p>
              Al momento de realizar la accion de volver a abrir la materia el profesor podra realizar las ediciones necesarias <br />
              De verdad la desea abrir?
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              color="success"
              disabled={disabledButton}
              onClick={(e) => onCloseMateria(e)}
              type="submit"
            >
              Abrir
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
  