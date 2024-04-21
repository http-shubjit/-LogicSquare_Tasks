import { Link } from "react-router-dom";


function Sidebar() {


  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{
      maxWidth: '200px'
    }}>
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Sidebar</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" key="home" >
          <Link to='/employelist' className={`nav-link text-white`} >Employes
          </Link>
        </li>
        <li key="create_post" >
          <Link to="/createemploye" className={`nav-link text-white`}>
            Create Invoice
          </Link>
        </li>
      </ul>


    </div >
  );
}


export default Sidebar;
