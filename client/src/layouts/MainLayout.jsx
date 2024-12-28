import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

function MainLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default MainLayout;
