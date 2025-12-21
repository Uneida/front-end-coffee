import { useNavigate } from "react-router";
import "./header.css";
type HeaderProps = {
  currentPage?: "Home" | "Methods" | "Coffee";
};
type Pages = "" | "methods" | "coffee";

export const Header = ({ currentPage }: HeaderProps) => {
  const navigate = useNavigate();

  const handleNavigation = (page: Pages) => {
    navigate(`/${page}`);
  };

  return (
    <header className="header">
      <div id="logo">
        <h1>Coffee Coders</h1>
      </div>
      {currentPage && (
        <nav>
          <button
            onClick={() => handleNavigation("")}
            className={currentPage === "Home" ? "active" : ""}
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("methods")}
            className={currentPage === "Methods" ? "active" : ""}
          >
            Metodos
          </button>
          <button
            onClick={() => handleNavigation("coffee")}
            className={currentPage === "Coffee" ? "active" : ""}
          >
            Cafés
          </button>
        </nav>
      )}
    </header>
  );
};
