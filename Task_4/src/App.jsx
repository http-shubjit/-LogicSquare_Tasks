import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Header from "./components/Header"
import Fotter from './components/Fotter';
import Sidebar from './components/Sidebar';
import EmployeListProvider from '../store/employe-list-store';
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <EmployeListProvider>
      <div className='app-container'>
        <Sidebar />
        <div className='content'>
          <Header />
          <Outlet></Outlet>
          <Fotter />
        </div>
      </div>
    </EmployeListProvider>
  )
}

export default App
