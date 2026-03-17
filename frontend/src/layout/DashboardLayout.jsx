import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { menuItems } from "../data/data";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Tasks from "../pages/dashboard/Tasks";
const DashboardLayout = () => {
  /* to store the index of the sidebar section that is active. It changes on click */
  const [active, setActive] = useState(0);
  
  return (
    <div className="dashboard">
      <SideBar active={active} setActive={setActive} />
      <section className="main">
        <Header title={menuItems[active].title} />
        <Outlet/>
       
      </section>
    </div>
  );
};

export default DashboardLayout;
