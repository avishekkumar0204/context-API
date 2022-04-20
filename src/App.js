import './App.css';
import Login from './component/Login';
import Form from './component/Form';
import LoginState from './context/LoginState';

function App() {
  return (

    <>
      <LoginState>

        <Form />
        <Login />
      </LoginState>

    </>

  );
}

export default App;
