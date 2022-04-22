import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

import { useState, useEffect } from "react";

const ModalPlanDelete = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

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
            onClick={toggle}
            form="productForm"
            type="submit"
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
