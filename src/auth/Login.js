import {useState} from 'react';
import {toast} from 'react-toastify';
import {login} from '../actions/auth';
import LoginForm from '../components/LoginForm';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
          e.preventDefault()
          console.log({email, password});
          try {
              let res = await login({
                  email,
                  password
              })
            if(res.data) {
                console.log(res.data)
            }
          }
          catch(err) {
              console.log(err)
              if(err.response.status === 400)toast.error(err.response.data)
          }
  }


   const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
        <div className='container-fluid bg-secondary  p-5 text-center'>
            <h1>LOGIN</h1>
        </div>

        <div className='container'>
           <div className='row'>
             <div className='col-md-6 offset-md-3'>
               <LoginForm email={email} password={password} handleSubmit={handleSubmit} handlePassword={handlePassword} handleEmail={handleEmail}/>
             </div>
           </div>
        </div>
        </>
    )
}

export default Login;