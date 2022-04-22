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

      <Modal size="xl" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {edit === false ? title : "Editar Notas"}
        </ModalHeader>
        <ModalBody>
          <form>
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Rafael Rodriguez <br />
                    C.I: 24530760
                  </td>
                  <td>
                    <Input
                      type="number"
                      name="contenido"
                      id="contenido"
                      placeholder="0"
                      max="20"
                      min="0"
                    />
                  </td>
                  <td>
                    <Input
                      type="number"
                      name="contenido"
                      id="contenido"
                      placeholder="0"
                      max="20"
                      min="0"
                    />
                  </td>
                  <td>
                    <Input
                      type="number"
                      name="contenido"
                      id="contenido"
                      placeholder="0"
                      max="20"
                      min="0"
                    />
                  </td>
                  <td>
                    <Input
                      type="number"
                      name="contenido"
                      id="contenido"
                      placeholder="0"
                      max="20"
                      min="0"
                    />
                  </td>
                  <td>
                    <Input
                      type="number"
                      name="contenido"
                      id="contenido"
                      placeholder="0"
                      max="20"
                      min="0"
                    />
                  </td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>
                    Ernesto Arteagaaaaa <br />
                    C.I: 24698214
                  </td>
                  <td>
                    <Input
                      type="number"
                      name="contenido"
                      id="contenido"
                      placeholder="0"
                      max="20"
                      min="0"
                    />
                  </td>
                  <td>
                    <Input
                      type="number"
                      name="contenido"
                      id="contenido"
                      placeholder="0"
                      max="20"
                      min="0"
                    />
                  </td>
                  <td>
                    <Input
                      type="number"
                      name="contenido"
                      id="contenido"
                      placeholder="0"
                      max="20"
                      min="0"
                    />
                  </td>
                  <td>
                    <Input
                      type="number"
                      name="contenido"
                      id="contenido"
                      placeholder="0"
                      max="20"
                      min="0"
                    />
                  </td>
                  <td>
                    <Input
                      type="number"
                      name="contenido"
                      id="contenido"
                      placeholder="0"
                      max="20"
                      min="0"
                    />
                  </td>
                  <td>14</td>
                </tr>
              </tbody>
            </Table>
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
