import { NavLink } from "react-router-dom";
import ProfileImg from "../assets/bg.png";
import logo from "../assets/logo.png";
import { menuItems } from "../data/data"; /* for dynamic loading of menu elements */

const SideBar = ({ active, setActive }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src={ProfileImg} alt="profile Image" />
          </div>
          <div className="profile-infos">
            <div>
              <p className="name">Mikele Allan</p>
              <p className="role">Admin</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="menu-container">
          <ul className="menu">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <NavLink
                to={item.link}
                key={index}
                end
                /**
                 * Normally the className attribut accept solely string
                 * But NavLink permits the className attribut to accept a method that returns a string
                 * This method takes a parameter (an object) that is "true" is the link corresponds, "false" otherwise
                */
               className={({ isActive }) =>
                `menu-item ${isActive ? "active" : ""}`
              }
              onClick={() => setActive(index)}
              >
                  
                  <Icon size={20} className="menu-item-icon" color="#fff"/> 
                  {item.title}
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
      <img className="sidebar-logo" src={logo} alt="Application logo" />
      <footer className="footer">
        <p>©MikeSquared Tech</p>
      </footer>
    </aside>
  );
};

export default SideBar;
