

// eslint-disable-next-line react/prop-types
function Sidebar({ selectedTab, setSelectedTab }) {


  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{
      maxWidth: '200px'
    }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" />
      <span className="fs-4">Emloye Dashboard</span>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("employelist");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${selectedTab === "employelist" && "bg-info"
              }`}
            aria-current="page"
          >

            Employes
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("createemploye");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${selectedTab === "createemploye" && "bg-info"
              }`}
          >
            Create Invoice
          </a>
        </li>
      </ul>


    </div >
  );
}


export default Sidebar;
