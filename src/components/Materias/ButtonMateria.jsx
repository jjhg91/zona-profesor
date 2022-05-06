import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const ButtonMateria = (props) => {
  const history = useHistory();
  const codEspecialidad = props.materia.codEspecialidad;
  const codMateria = props.materia.codMateria;
  const codTurno = props.materia.turno;
  const periodo = props.materia.periodo;

  const routeChange = () => {
    let path = `materia/${codEspecialidad}/${codMateria}/${codTurno}/${periodo}`;
    history.push(path);
  };

  return (
    <Button color="primary" size="sm" onClick={routeChange}>
      VER
    </Button>
  );
};

export default ButtonMateria;
