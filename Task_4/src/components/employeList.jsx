import { useContext } from 'react'
import Employe from '../components/Employe'
import { EmployeList as EmployeListData } from '../../store/employe-list-store'
import Welcome from './Welcome'
function EmployeeList() {
  console.log(EmployeListData)
  const { employelist, fetching } = useContext(EmployeListData)

  return (
    <>
      {fetching ? <div className="d-flex justify-content-center spinner">
        <div className="spinner-border" role="status">
        </div>
      </div> : <>{employelist.length === 0 && <Welcome />}

        {employelist.map((employe, index) => <Employe
          post={employe}
          key={index}
        />)}</>
      }
    </>
  )
}

export default EmployeeList


// 







