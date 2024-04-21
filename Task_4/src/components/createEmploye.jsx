import { useContext, useRef } from "react"
import { EmployeList } from '../../store/employe-list-store'
function CreateEmployee() {
  const { addEmploye } = useContext(EmployeList)

  const IdElement = useRef()
  const nameElement = useRef()
  const salaryElement = useRef()
  const ageElement = useRef()

  const handleOnsubmit = (event) => {
    event.preventDefault()
    const Id = IdElement.current.value
    const name = nameElement.current.value
    const salary = salaryElement.current.value
    const age = ageElement.current.value.split(' ')
    //for clear all
    IdElement.current.value = ""
    nameElement.current.value = ""
    salaryElement.current.value = ""
    ageElement.current.value = ""
    addEmploye(Id, name, salary, age)


  }


  return (
    <form className="createpost" onSubmit={handleOnsubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label ">Enter Employe Id </label>
        <input type="text" className="form-control" id="userId" placeholder="enter employe id" ref={IdElement} required />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Enter Employe Full Name</label>
        <input type="text" className="form-control" id="title" placeholder="Narendra Modi" ref={nameElement} required />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Enter Employe Salary</label>
        <input className="form-control" id="body" ref={salaryElement} required placeholder="$12" />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter Employe Age</label>
        <input type="text" className="form-control" id="tags" ref={ageElement} />
      </div>

      <button type="submit" className="btn bg-info">Create Employe</button>
    </form>
  )
}

export default CreateEmployee