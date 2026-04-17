import { useNavigate } from "react-router-dom";

const Navbar = ({ title }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("finance_token");
    navigate("/login");
  };

  return (
    <header className="app-header">
      <div className="brand">FinanceApp</div>
      <div className="header-actions">
        <span>{title}</span>
        <button className="button button-secondary" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
