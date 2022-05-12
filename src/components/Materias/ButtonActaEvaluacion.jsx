import { Button } from "reactstrap";
import * as Axios from "axios";
import useUser from "hooks/useUser";
import { useState } from "react";

const ButtonActaEvaluacion = (props) => {
  const { jwt } = useUser();
  const especialidad = props.especialidad;
  const materia = props.materia;
  const turno = props.turno;
  const periodo = props.periodo;
  const [disabledButton, setDisableButton] = useState(false);

  const downloadDocument = () => {
    setDisableButton(true);
    const url = `${process.env.REACT_APP_API_URL}/doc/acta-evaluacion/${especialidad}/${materia}/${turno}/${periodo}`;
    Axios.get(url, {
      headers: {
        Authorization: jwt,
      },
      responseType: "blob",
    })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "registro-evaluacion.docx"); //or any other extension
        document.body.appendChild(link);
        link.click();
        setDisableButton(false);
      })
      .catch((err) => {
        setDisableButton(false);
      });
  };
  return (
    <Button
      color="primary"
      size="sm"
      className="m-4"
      onClick={(e) => downloadDocument(e)}
      disabled={disabledButton}
    >
      Descargar Acta De Evaluaciones
    </Button>
  );
};

export default ButtonActaEvaluacion;
