/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import * as Axios from "axios";
import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";

// reactstrap components
import { Card, CardBody, CardFooter, Row, Col } from "reactstrap";

function User() {
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
                {/* <ModalUser
                  user={user}
                  getUser={getUser}
                  className="position-absolute top-100 end-100"
                />
                <ModalPassword /> */}
                <div className="author">
                  <img
                    alt="..."
                    className="avatar border-gray"
                    src={require("assets/img/default-avatar.png").default}
                  />
                  <h5 className="title text-primary">
                    {user.nombre},{" "}
                    {user.apellido ? user.apellido : "sin apellido"}
                  </h5>

                  <p className="description">
                    <strong>Profesor</strong> <br />
                    <strong>Titulo: </strong>
                    {user.titulo}
                  </p>
                </div>
                <p className="description text-center">
                  <span>
                    <strong>Cedula: </strong>
                    {user.cedula}
                  </span>
                  <br />
                  <span>
                    <strong>Correo: </strong>
                    {user.correo}
                  </span>
                  <br />
                  <span>
                    <strong>Telefono: </strong>
                    {user.telefono}
                  </span>
                  <br />
                  <span>
                    <strong>Direccion: </strong>sin direccion
                  </span>
                </p>
              </>
            )}
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default User;
