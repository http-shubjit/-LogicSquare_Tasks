import { useEffect, useState } from "react";
import { createContext, useCallback, useReducer } from "react"

export const EmployeList = createContext({
  employeList: [],
  addEmploye: () => { },
  deleteEmploye: () => { }
})
const employeReducer = (currEmployeList, action) => {
  let newEmployeList = currEmployeList;

  if (action.type === "DELETE") {
    newEmployeList = newEmployeList.filter((employe) => employe.id !== action.payload.id)
  }

  else if (action.type === "ADD") {

    newEmployeList = [...newEmployeList, action.payload]
  }
  else if (action.type === "ADD_INTIAL_POST") {
    newEmployeList = action.payload.users
  }
  return newEmployeList
}

const EmployeListProvider = ({ children }) => {
  const [employeList, dispatchEmploye] = useReducer(employeReducer, [])

  console.log(employeList)

  const [fetching, setFetching] = useState(false)

  const addIntialEmploye = useCallback((users) => {
    dispatchEmploye({
      type: "ADD_INTIAL_POST",
      payload: {
        users
      },
    })
  }, [])


  const addEmploye = useCallback((Id, name, salary, age) => {
    dispatchEmploye({
      type: "ADD",
      payload: {
        id: Id,
        name: name,
        salary: salary,
        age: age,
      }

    })
  }, [dispatchEmploye])

  const deleteEmploye = useCallback((employeid) => {
    dispatchEmploye({
      type: 'DELETE'
      ,
      payload: {
        id: employeid
      }
    })


  }, [dispatchEmploye])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    setFetching(true)
    fetch('https://dummyjson.com/users', signal)
      .then(res => res.json())
      .then(data => {
        addIntialEmploye(data.users)
        setFetching(false)
      }
      );
    return () => {
      controller.abort()
    }

  }, [])



  return <EmployeList.Provider value={{
    employeList, addEmploye, deleteEmploye, fetching
  }
  }>
    {children}
  </EmployeList.Provider>
}



export default EmployeListProvider