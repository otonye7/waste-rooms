import {useState} from 'react';
import Registerform from '../components/RegisterForm';
import axios from 'axios';

const Register = () => {
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
      } catch (err) {
          console.log(err)
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