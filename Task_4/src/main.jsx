import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page.jsx';
import EmployeeList from './components/employeList.jsx';
import CreateEmployee from './components/createEmploye.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/employelist",
        element: < EmployeeList />,
      },
      {
        path: '/createemploye',
        element: <CreateEmployee />
      }
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)
