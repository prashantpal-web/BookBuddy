import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyFooter from "./components/MyFooter";
import "flowbite/dist/flowbite.min.css";

function App() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Outlet />
      </div>

      <MyFooter />
    </>
  );
}

export default App;
