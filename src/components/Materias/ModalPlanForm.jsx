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

const ModalPlanForm = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const title = props.title;
  const edit = props.edit;

  return (
    <>
      <Button color="primary" size="sm" className="mr-1" onClick={toggle}>
        {title}
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {edit === false ? title : "Editar Actividad"}
        </ModalHeader>
        <ModalBody>
          <form>
            <FormGroup>
              <Label for="exampleEmail">Contenido</Label>
              <Input
                type="text"
                name="contenido"
                id="contenido"
                placeholder="Descipcion del contenido"
              />
              <FormText color="muted">
                Este campo no puede estar vacio <small>(carac. 100 max)</small>
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Actividad</Label>
              <Input
                type="text"
                name="actividad"
                id="actividad"
                placeholder="Actividad"
              />
              <FormText color="muted">
                Este campo no puede estar vacio <small>(carac. 100 max)</small>
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Ponderacion (%)</Label>
              <Input
                type="number"
                name="contenido"
                id="contenido"
                placeholder="0"
              />
              <FormText color="muted">
                Este campo no puede estar vacio <small>(carac. 100 max)</small>
              </FormText>
            </FormGroup>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={toggle}
            form="productForm"
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

export default ModalPlanForm;
