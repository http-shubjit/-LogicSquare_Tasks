/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react"

export const EmployeList = createContext({
  employeList: [],
  addEmploye: () => { },
  deleteEmploye: () => { },
  editEmploye: () => { }
})
const employeReducer = (currEmployeList, action) => {
  let newEmployeList = currEmployeList;
  if (action.type === "DELETE") {
    newEmployeList = newEmployeList.filter((employe) => employe.id !== action.payload.id)
  }

  else if (action.type === "ADD") {

    newEmployeList = [...newEmployeList, action.payload]
  }
  else if (action.type === "EDIT") {
    const updateemploye = action.payload.updateemploye
    // console.log(updateemploye.id)
    const updatedList = newEmployeList.map(employee => {
      if (employee.id === updateemploye.id) {
        return {
          ...employee,
          name: updateemploye.name,
          age: updateemploye.age,
          salary: updateemploye.salary
        };
      }
      return employee;
    });

    newEmployeList = updatedList;
  }
  return newEmployeList
}

const EmployeListProvider = ({ children }) => {
  const [employeList, dispatchEmploye] = useReducer(employeReducer, DEFAULT_LIST)

  const addEmploye = (Id, name, salary, age) => {
    dispatchEmploye({
      type: "ADD",
      payload: {
        id: Id,
        name: name,
        salary: salary,
        age: age,
      }

    }),
      [dispatchEmploye]
  }

  const deleteEmploye = (employeid) => {
    dispatchEmploye({
      type: 'DELETE'
      ,
      payload: {
        id: employeid
      }
    }), [dispatchEmploye]
  }
  const editEmploye = (updateemploye) => {
    dispatchEmploye({
      type: "EDIT",
      payload: {
        updateemploye: updateemploye
      }

    })


  }





  return <EmployeList.Provider value={{
    employeList, addEmploye, deleteEmploye, editEmploye
  }
  }>
    {children}
  </EmployeList.Provider>
}

const DEFAULT_LIST = [
  {
    id: 2,
    name: "Ranjit Biswal",
    salary: "600",
    age: 27
  },


  {
    id: 3,
    name: "Biswajit Biswal",
    salary: "500",
    age: 24
  },
  {
    id: 1,
    name: "Shubhajit Biswal",
    salary: "400",
    age: 21
  },
]


export default EmployeListProvider