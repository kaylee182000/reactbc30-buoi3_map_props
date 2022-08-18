import { NavLink, Outlet } from "react-router-dom";

//Component
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          CyberSoft
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-light text-dark nav-link" : "nav-link"
                }
                to="/home"
              >
                Home <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-light text-dark nav-link" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-light text-dark nav-link" : "nav-link"
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-light text-dark nav-link" : "nav-link"
                }
                to="/register"
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-light text-dark nav-link" : "nav-link"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-light text-dark nav-link" : "nav-link"
                }
                to="/reactform"
              >
                Form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-light text-dark nav-link" : "nav-link"
                }
                to="/lifecycle"
              >
                LifeCycle
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Redux
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="demoredux">
                  Tang giam so luong
                </NavLink>
                <NavLink className="dropdown-item" to="demoreduxcolor">
                  Doi mau
                </NavLink>
                <NavLink className="dropdown-item" to="demoQLSV">
                  QLSV
                </NavLink>
                <NavLink className="dropdown-item" to="demogiohang">
                  Gio Hang
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      <div style={{ minHeight: 500 }}>
        <Outlet />
      </div>
      <footer className="bg-dark">footer</footer>
    </div>
  );
}

export default App;
