import NavigationBar from "./NavigationBar";
import {Outlet} from "react-router-dom";

const NavbarWrapper = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default NavbarWrapper;
