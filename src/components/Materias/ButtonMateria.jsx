import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const ButtonMateria = (props) => {
  const history = useHistory();

  const routeChange = () => {
    let path = `materia`;
    history.push(path);
  };

  return (
    <Button color="primary" size="sm" onClick={routeChange}>
      VER
    </Button>
  );
};

export default ButtonMateria;
