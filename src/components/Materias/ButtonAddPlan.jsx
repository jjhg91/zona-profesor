import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const ButtonAddPlan = (props) => {
  const history = useHistory();

  return (
    <Button color="primary" size="sm">
      Añadir Actividad
    </Button>
  );
};

export default ButtonAddPlan;
