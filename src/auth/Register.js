import {useState} from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        alert('seen fool')
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

    const registerForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Your Name</label>
                    <input 
                    type='text'
                    className='form-control'
                    placeholder='Enter Name' 
                    value= {name}
                    onChange={handleName}/>
                </div>

                <div className='form-group'>
                    <label>Email Address</label>
                    <input 
                    type='email'
                    className='form-control'
                    placeholder='Enter Email' 
                    value= {email}
                    onChange={handleEmail}/>
                </div>

                <div className='form-group'>
                    <label>Your Password</label>
                    <input 
                    type='password'
                    className='form-control'
                    placeholder='Enter Password' 
                    value= {password}
                    onChange={handlePassword}/>
                </div>

                <button className='btn btn-primary'>Submit</button>
            </form>
        )
    }

    return (
        <>
        <div className='container-fluid bg-secondary p-5 text-center'>
            <h1>Register</h1>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    {registerForm()}
                </div>
            </div>
        </div>
        </>
    )
}

export default Register;