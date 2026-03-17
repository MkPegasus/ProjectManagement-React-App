import { Route, Routes, BrowserRouter } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import AuthLayout from "./layout/AuthLayout";
import RegisterForm from "./pages/auth/RegisterForm";
import LoginForm from "./pages/auth/LoginForm";
import DashBoard from "./pages/dashboard/DashBoard";
import Projects from "./pages/dashboard/Projects";
import Tasks from "./pages/dashboard/Tasks";
import Account from "./pages/dashboard/Account";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";
import "./StyleForms.css";
const App = () => {
  /* the index of the current section */
  const userId = "M002";
  return (
    <div className="App">
      {/*Routes definitions */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashBoard userId={userId} />} />
            <Route path="projects" element={<Projects userId={userId} />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
