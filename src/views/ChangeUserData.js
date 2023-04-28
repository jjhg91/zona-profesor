import * as Axios from "axios";
import ModalUser from "components/User/ModalUser";
import ModalPassword from "components/User/ModalPassword";
import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";

// reactstrap components
import { Card, CardBody, CardFooter, Row, Col } from "reactstrap";

function ChangeData() {
  const { jwt } = useUser();
  const [user, setUser] = useState();

  const getUser = async () => {
    const url = `${process.env.REACT_APP_API_URL}/profesor/`;
    await Axios.get(url, {
      headers: {
        Authorization: jwt,
      },
    }).then((res) => {
      setUser(res.data);
    });
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <div className="content">
        <Card className="card-user">
          <div className="image">
            <img
              alt="..."
              src={require("assets/img/damir-bosnjak.jpg").default}
            />
          </div>
          <CardBody className="">
            {!user ? (
              ""
            ) : (
              <>
                {<ModalPassword />}
              </>
            )}
          </CardBody>
          <CardFooter>
            <hr />
            <div className="button-container">
              <Row>
                <Col className="m-auto" lg="12" md="12" xs="12">
                  {/* <ModalUser /> */}
                </Col>
              </Row>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
export default ChangeData;
