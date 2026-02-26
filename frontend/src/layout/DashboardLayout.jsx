import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { menuItems } from "../data/data";
import { act, useEffect, useState } from "react";
import Projects from "../pages/dashboard/Projects";
import DashBoard from "../pages/dashboard/DashBoard";
const DashboardLayout = () => {
  /* to store the index of the sidebar section that is active. It changes on click */
  const [active, setActive] = useState(0);
  const userId = "M002";
  let content1;
  
  switch (menuItems[active]) {
    case "Projects":
      content1 = <Projects userId={userId} />;
      break;
    case "Tasks":
      content1 = <Projects userId={userId} />;
      break;
    case "Team":
      content1 = <Projects userId={userId} />;
      break;
    case "Account":
      content1 = <Projects userId = {userId}/>
      break;
    default:
      content1 = <DashBoard userId={userId} />;
      break;
  }
  return (
    <div className="dashboard">
      <SideBar active={active} setActive={setActive} />
      <section className="main">
        <Header title={menuItems[active].title} />
        {content1}
      </section>
    </div>
  );
};

export default DashboardLayout;
