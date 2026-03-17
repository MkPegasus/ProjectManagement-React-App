import { Outlet, useLocation, useNavigate } from "react-router-dom";
const AuthLayout = () => {
  /*Hook to navigate between pages from JS code  */
  const navigate = useNavigate();
  /* Collects the location */
  const { pathname } = useLocation();
  return (
    <div className="tf-wrap">
     
      <div className="tf-card">
        <div className="tf-tabs">
          <button
            className={`tf-tab ${pathname === "/" ? "active" : ""}`}
            onClick={() => navigate("/")}
          >
            Connexion
          </button>
          <button
            onClick={() => navigate("/register")}
            className={`tf-tab ${pathname === "/register" ? "active" : ""}`}
          >
            Inscription
          </button>
        </div>

        <div className="tf-body">
          <div className="tf-logo-area">
            <svg
              className="tf-logo-icon"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="lg1"
                  x1="0"
                  y1="0"
                  x2="36"
                  y2="36"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stop-color="#7B5EA7" />
                  <stop offset="50%" stop-color="#4A6FD4" />
                  <stop offset="100%" stop-color="#3BBFA0" />
                </linearGradient>
              </defs>
              <rect
                x="14"
                y="4"
                width="4"
                height="28"
                rx="2"
                fill="url(#lg1)"
              />
              <rect x="6" y="4" width="22" height="4" rx="2" fill="url(#lg1)" />
              <circle cx="26" cy="20" r="3" fill="#7EC86A" />
              <circle cx="10" cy="26" r="2" fill="#3BBFA0" />
              <circle cx="26" cy="28" r="2" fill="#4A6FD4" />
              <line
                x1="18"
                y1="20"
                x2="23"
                y2="20"
                stroke="#7B5EA7"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <line
                x1="18"
                y1="26"
                x2="10"
                y2="26"
                stroke="#3BBFA0"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <line
                x1="18"
                y1="28"
                x2="24"
                y2="28"
                stroke="#4A6FD4"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <div>
              <div className="tf-brand">
                TASK<span>FLOW</span>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
