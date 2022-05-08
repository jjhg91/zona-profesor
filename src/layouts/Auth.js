/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footer/Footer";

import routes from "routes.js";
import useUser from "hooks/useUser";

const Auth = (props) => {
  const { isLogged } = useUser();
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          >
            {isLogged ? <Redirect to="/admin/inicio" /> : ""}
          </Route>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div className="main-content bg-secundary" ref={mainContent}>
        <AuthNavbar />
        <div className="header bg-gradient-info py-6 py-lg-6">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Bienvenido!</h1>
                  <p className="text-lead text-light">
                    Este es el nuevo sistema para gestion de procesos del docente referente al area academica del periodo en curso pudiendo gestionar tanto las actividades de los planes de evaluacion de las distintas materias asignadas, como las notas de los estudiantes en dichos curso.<br/>
                    
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          {/* <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div> */}
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Switch>
              {getRoutes(routes)}
              {isLogged ? <Redirect from="*" to="/auth/login" /> : ""}
            </Switch>
          </Row>
        </Container>
      </div>
      <div className="text-white">
        <Footer />
      </div>
    </>
  );
};

export default Auth;
