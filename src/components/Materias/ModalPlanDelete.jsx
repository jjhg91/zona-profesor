import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { useState } from "react";
import * as Axios from "axios";

import useUser from "hooks/useUser";

const ModalPlanDelete = (props) => {
  const { jwt } = useUser();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const plan = props.plan;
  const materia = props.materia;
  const getMateria = props.getMateria;

  const onDelete = (e) => {
    const url = `http://apizp.iutjmc.com.ve/api/plan-evaluacion/`;
    Axios.delete(url, {
      headers: {
        Authorization: jwt,
      },
      data: { materia: materia, plan: plan },
    }).then((res) => {
      getMateria();
      setModal(!modal);
    });
  };
  return (
    <>
      <Button color="danger" size="sm" className="mr-1" onClick={toggle}>
        Delete
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Eliminar Actividad</ModalHeader>
        <ModalBody>
          Al eliminar esta actividad se se eliminaran las notas asociadas a
          dicha actividad a todos los alugnos que cursan esta asignaruta
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={(e) => {
              onDelete(e);
            }}
          >
            Eliminar
          </Button>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalPlanDelete;
