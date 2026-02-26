import ProfileImg from "../assets/bg.png";
import { menuItems } from "../data/data";

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
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
              >
                <span>{item.icon}</span>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="footer">
        <p>©MikeSquared Tech</p>
      </footer>
    </aside>
  );
};

export default SideBar;
