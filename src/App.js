import logo from './logo.svg';
import Swal from 'sweetalert2'
import './App.css';
import Header from './components/Header'
import Router from './Routers/Router'
import Login from './components/login'
import Conponent from './components/component';

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
        <Conponent />
      </>
    );
  }
  
}

export default App;
