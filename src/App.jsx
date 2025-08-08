
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import AuthContext from './context/AuthProvider.jsx'

function App() {
  const [user, setUser] = useState(null)

  const authData = useContext(AuthContext);


  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setUser(loggedInUser.role);
    }
  }, [authData]);


  const handleLogin = (email,password) => {
    if(email=='admin@me.com' && password==123){
      setUser('admin');
      setLocalStorage('loggedInUser', JSON.stringify({ role: 'admin' }));
    }else if(authData && authData.userData && authData.userData.employees.find(emp => emp.email === email && emp.password === password)){
      setUser('employee');
       setLocalStorage('loggedInUser', JSON.stringify({ role: 'employee' }));
    }else{
      setUser('Invalid credentials');
    }
  }

  
  

  return (
    <>
      { !user ? <Login handleLogin={handleLogin} /> : ''}
      { user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard /> }
    </>
  )
}

export default App
