import {useState} from 'react';
import Registerform from '../components/RegisterForm';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({history}) => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        //the second argument is what you want to post the database
      try {
        const res = await axios.post(`http://localhost:8000/api/register`, {
            name,
            email,
            password
        })
        console.log(res)
        toast.success('Registeration Sucessful, You can now Login');
        history.push('/login')
      } catch (err) {
          console.log(err)
         if(err.response.status === 400)toast.error(err.response.data, 'You cant Login because you got my form fucked up. Please try again.')
      }
        // console.table({name, email, password})
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
        <div className='container-fluid bg-secondary p-5 text-center'>
            <h1>Register</h1>
        </div>

        <ToastContainer />

        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <Registerform handleSubmit={handleSubmit} name={name} password={password} email={email} handleName={handleName} handleEmail={handleEmail} handlePassword={handlePassword}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register;