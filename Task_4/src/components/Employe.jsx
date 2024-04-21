/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { EmployeList } from '../../store/employe-list-store'
import { FaEdit } from "react-icons/fa";
function Employe({ employe }) {

  const { deleteEmploye, editEmploye } = useContext(EmployeList)

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(employe.name);
  const [editedAge, setEditedAge] = useState(employe.age);
  const [editedSalary, setEditedSalary] = useState(employe.salary);



  const handleSaveClick = () => {
    editEmploye({
      id: employe.id,
      name: editedName,
      age: editedAge,
      salary: editedSalary

    })



    setIsEditing(false);
  };
  return (

    <div className="card post_card" >
      <div className="card-body">
        <p>Employe Name: {isEditing ? <input
          type="text"
          style={{ height: "30px", borderRadius: "5px", border: "1px solid black" }}
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        /> : <span style={{ fontWeight: "bolder" }}>{employe.name}</span>}</p>

        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deleteEmploye(employe.id)}
        ><MdDelete />
        </span>

        <span
          className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-warning"
          onClick={() => setIsEditing(true)}
        >
          <FaEdit />
        </span>

        <p className="card-text">Employe ID:
          <span style={{ fontWeight: "bolder" }}>{employe.id}</span>
        </p>

        <p className="card-text">
          Age:
          {isEditing ?
            <input
              type="text"
              style={{ height: "30px", borderRadius: "5px", border: "1px solid black" }}
              value={editedAge}
              onChange={(e) => setEditedAge(e.target.value)}
            /> : <span style={{ fontWeight: "bolder" }}>{employe.age}</span>
          }
        </p>
        <p className="card-text">
          Salary: {isEditing ?
            <input
              type="text"
              style={{ height: "30px", borderRadius: "5px", border: "1px solid black" }}
              value={editedSalary}
              onChange={(e) => setEditedSalary(e.target.value)}
            /> : <span style={{ fontWeight: "bolder" }}>
              {employe.salary}/Day
            </span>
          }
        </p>
        {isEditing && (
          <button className="btn bg-dark text-white" onClick={handleSaveClick}>
            Change
          </button>
        )}
      </div>
    </div >
  )
}

export default Employe