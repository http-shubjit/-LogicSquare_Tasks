import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { EmployeList } from '../../store/employe-list-store'
function Employe({ employe }) {


  const { deleteEmploye } = useContext(EmployeList)
  return (
    <div className="card post_card" style={{ width: "3orem" }}>
      <div className="card-body">
        <p className="card-text">{employe.id}</p>
        <h5 className="card-title">Employe Name:{employe.name}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deleteEmploye(employe.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{employe.age}</p>

        <div className="alert alert-primary reaction" role="alert">
          {employe.salary}
        </div>


      </div>
    </div >
  )
}

export default Employe