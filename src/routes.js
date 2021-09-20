import Dashboard from "views/Dashboard.js";
import Students  from "views/students/Students";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/students",
    name: "Estudantes",
    icon: "nc-icon nc-tile-56",
    component: Students,
    layout: "/admin",
  }
];

export default routes;
