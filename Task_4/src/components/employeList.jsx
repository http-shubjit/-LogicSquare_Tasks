import { useContext } from 'react'
import Employe from '../components/Employe'
import { EmployeList as EmployeListData } from '../../store/employe-list-store'
function EmployeeList() {
  const { employeList } = useContext(EmployeListData)
  return (
    <>
      {employeList.map((employe) => (
        <Employe
          key={employe.id}
          employe={employe}
        />
      ))}
    </>
  )
}

export default EmployeeList










