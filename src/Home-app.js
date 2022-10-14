import logo from './logo.svg';
import Swal from 'sweetalert2'
import './App.css';
import Header from './components/Header'
import Router from './Routers/Router'
// import Login from './components/login'

function App() {
  return (
    <>
      <Header />
      <Router/>
      {/* <Login/> */}
    </>
  );
}

export default App;
