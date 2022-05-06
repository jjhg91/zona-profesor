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
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import TableList from "views/Tables.js";
import UserPage from "views/User.js";

import Login from "views/Login";

var routes = [
  {
    path: "/inicio",
    name: "Inicio",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
    visible: true,
  },
  {
    path: "/usuario",
    name: "Perfil de Usuario",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
    visible: true,
  },
  {
    path: "/materias",
    name: "Materias",
    icon: "nc-icon nc-book-bookmark",
    component: TableList,
    layout: "/admin",
    visible: true,
  },
  {
    path: "/materia/:codEspecialidad/:codMateria/:codTurno/:periodo",
    name: "Materia",
    icon: "nc-icon nc-book-bookmark",
    component: Icons,
    layout: "/admin",
    visible: false,
  },

  /**
   * ROUTE LOGIN WITHOUT AUTHORICE
   */
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    nav: true,
  },
];
export default routes;
