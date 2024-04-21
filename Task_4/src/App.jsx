import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import './App.css'
import Header from "./components/Header"
import Fotter from './components/Fotter';
import Sidebar from './components/Sidebar';
import EmployeListProvider from '../store/employe-list-store';
import EmployeeList from './components/employeList';
import CreateEmployee from './components/createEmploye';



function App() {
  const [selectedTab, setSelectedTab] = useState("employelist");
  return (
    <EmployeListProvider>
      <div className='app-container'>
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className='content'>
          <Header />
          {selectedTab === "employelist" ? <EmployeeList /> : <CreateEmployee />}
          <Fotter />
        </div>
      </div>
    </EmployeListProvider>
  )
}

export default App
