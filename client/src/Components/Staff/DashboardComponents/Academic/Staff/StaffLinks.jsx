import { RouteObjects } from "../../../../../Routes/RoutObjects";

import {
    faBars,
    faBook,
    faCaretRight,
    faChalkboard,
    faHome,
    faUserPlus,
  } from "@fortawesome/free-solid-svg-icons";
const StaffLink = [
    {
        titleName: "Staff Details",
        href: RouteObjects.StaffList,
        icon: faBook,
      },
      {
        titleName: "Attandance",
        href: RouteObjects.StaffList,
        icon: faBook,
      },
      {
        titleName: "Attandance Reports (Monthly)",
        href: RouteObjects.StaffList,
        icon: faBook,
      },
      {
        titleName: "Manage Class&Section",
        href: RouteObjects.StaffManageClass,
        icon: faBook,
      },
      {
        titleName: "Preparations",
        href: RouteObjects.Preparations,
        icon: faBook,
      },
      {
        titleName: "Settings",
        href: RouteObjects.StaffAcademicsSettings,
        icon: faBook,
      },




]


export default StaffLink