const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          <span className="badge bg-light text-dark fs-4">NewsMag</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {["general", "technology", "business", "health", "sports", "entertainment"].map(
              (cat) => (
                <li key={cat} className="nav-item">
                  <div
                    className="nav-link text-capitalize"
                    style={{ cursor: "pointer" }}
                    onClick={() => setCategory(cat)}
                  >
                    {cat}
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
