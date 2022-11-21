import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase/firebase.init';
import RegisterReactBootstrap from './components/RegisterReactBootstrap';


const auth = getAuth(app)

const handleRegister = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(email, password);
}

const handleEmailBlur = event => {
  console.log(event.target.value)
}
const handlePasswordBlur = event =>{
  const pass= event.target.value
  const passLength = pass.length
  console.log(pass,passLength)
}

function App() {
  return (
    <div className="">
      <RegisterReactBootstrap></RegisterReactBootstrap>      
    </div>
  );
}

export default App;
