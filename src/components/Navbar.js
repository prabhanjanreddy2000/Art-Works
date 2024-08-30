import { Link } from "react-router-dom";
import '../styles/navbar.css'
export default function Navbar() {
  return (
    <div className="navbar-api">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src="https://api.artic.edu/docs/assets/logo.svg" className="mx-2" alt="Bootstrap" width="50px" height="50px"/>
            Art Institute of Chicago API
          </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
    </div>
  )
}
