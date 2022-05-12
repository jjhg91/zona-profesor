import {
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

import { useEffect, useState } from "react";
import * as Axios from "axios";
import useUser from "hooks/useUser";

const ModalPlanForm = (props) => {
  const { jwt } = useUser();
  const [modal, setModal] = useState(false);
  const title = props.title;
  const edit = props.edit;
  const materia = props.materia;
  const getMateria = props.getMateria;
  const ponderacionTotal = props.ponderacionTotal;
  const [ponderacionOriginal, setPonderacionOriginal] = useState();
  const [disabledButton, setDisabledButton] = useState(false);
  const [plan, setPlan] = useState({
    id: "",
    especialidad: "",
    materia: "",
    turno: "",
    id_actividad: "",
    contenido: "",
    actividad: "",
    quien: "",
    cuando: "",
    periodo: "",
    ponderacion: "",
  });

  const toggle = () => {
    setModal(!modal);
    if (edit == false) {
      setPlan({
        id: "",
        especialidad: "",
        materia: "",
        turno: "",
        id_actividad: "",
        contenido: "",
        actividad: "",
        quien: "",
        cuando: "",
        periodo: "",
        ponderacion: "",
      });
    }
  };
  const handle = (e) => {
    const newPlan = { ...plan };
    if (e.target.id === "ponderacion") {
      if (edit === true) {
        var restante =
          ponderacionTotal + 30 >= 100
            ? 100 - ponderacionTotal + ponderacionOriginal
            : 30;
      } else {
        var restante =
          ponderacionTotal + 30 >= 100 ? 100 - ponderacionTotal : 30;
      }
      newPlan[e.target.id] =
        e.target.value > restante
          ? restante
          : e.target.value < 0
          ? 5
          : e.target.value;
    } else {
      newPlan[e.target.id] = e.target.value;
    }
    setPlan(newPlan);
  };

  const submit = (e) => {
    setDisabledButton(true);
    e.preventDefault();
    if (edit === true) {
      const url = `${process.env.REACT_APP_API_URL}/plan-evaluacion/${props.plan.id}`;
      Axios.put(
        url,
        { materia: materia, plan: plan },
        {
          headers: {
            Authorization: jwt,
          },
        }
      )
        .then((res) => {
          setDisabledButton(false);
          getMateria();
          toggle();
        })
        .catch((err) => {
          setDisabledButton(false);
        });
    }
    if (edit === false) {
      const url = `${process.env.REACT_APP_API_URL}/plan-evaluacion/`;
      Axios.post(
        url,
        { materia: materia, plan: plan },
        {
          headers: {
            Authorization: jwt,
          },
        }
      )
        .then((res) => {
          setDisabledButton(false);
          getMateria();
          toggle();
        })
        .catch((err) => {
          setDisabledButton(false);
        });
    }
  };

  useEffect(() => {
    if (edit === true) {
      setPlan({
        id: "" + props.plan.id,
        especialidad: "" + props.plan.especialidad,
        materia: "" + props.plan.materia,
        turno: "" + props.plan.turno,
        id_actividad: "" + props.plan.id_actividad,
        contenido: "" + props.plan.contenido,
        actividad: "" + props.plan.actividad,
        quien: "" + props.plan.quien,
        cuando: "" + props.plan.cuando,
        periodo: "" + props.plan.periodo,
        ponderacion: "" + props.plan.ponderacion,
      });
      setPonderacionOriginal(parseInt(props.plan.ponderacion));
    }
  }, []);

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
          <form onSubmit={(e) => submit(e)} id="planForm">
            <FormGroup>
              <Label for="exampleEmail">N° de Actividad</Label>
              <Input
                type="number"
                name="id_actividad"
                id="id_actividad"
                min="0"
                placeholder=""
                value={plan.id_actividad}
                onChange={(e) => handle(e)}
              />
              <FormText color="muted">
                Este campo no puede estar vacio <small>(carac. 100 max)</small>
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Contenido</Label>
              <Input
                type="text"
                name="contenido"
                id="contenido"
                placeholder="Descripcion del contenido"
                value={plan.contenido}
                onChange={(e) => handle(e)}
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
                value={plan.actividad}
                onChange={(e) => handle(e)}
              />
              <FormText color="muted">
                Este campo no puede estar vacio <small>(carac. 100 max)</small>
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Ponderacion (%)</Label>
              <Input
                type="number"
                name="ponderacion"
                id="ponderacion"
                placeholder="0"
                min="5"
                max="30"
                value={parseInt(plan.ponderacion)}
                onChange={(e) => handle(e)}
              />
              <FormText color="muted">
                Este campo no puede estar vacio, minimo 5%, maximo 30% (
                {ponderacionTotal}% de 100%)
              </FormText>
            </FormGroup>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            // onClick={toggle}
            form="planForm"
            type="submit"
            disabled={disabledButton}
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
