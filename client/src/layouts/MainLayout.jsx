import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

function MainLayout() {
  return (
    <>
      <div className="bg-gray-700 min-h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
