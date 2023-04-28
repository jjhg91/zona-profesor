import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const ButtonTodasLasMaterias = (props) => {
  const history = useHistory();

  const routeChange = () => {
    let path = `CloseAndOpenMaterias/`;
    history.push(path);
  };

  return (
    <Button color="primary" size="sm" onClick={routeChange}>
        VER TODAS LAS MATERIAS
    </Button>
  );
};

export default ButtonTodasLasMaterias;