import logo from './logo.svg';
import Swal from 'sweetalert2'
import './App.css';
import Header from './components/Header'
import Router from './Routers/Router'
import Login from './components/login'
import Home_app from './Home-app'

function App() {
  
  const token_login = localStorage.getItem('token')
  if(!token_login){
    return (
      <>
        <Login/>
      </>
    );
  }else{
    return (
      <>
        <Header />
        <Router/>
      </>
    );
  }
  
}

export default App;
