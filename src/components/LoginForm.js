const LoginForm = ({email, handleEmail, password, handlePassword, handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit} className='mt-3'>

                <div className='form-group mb-3'>
                    <label className='form-label'>Email Address</label>
                    <input 
                    type='email'
                    className='form-control'
                    placeholder='Enter Email' 
                    value= {email}
                    onChange={handleEmail}/>
                </div>

                <div className='form-group mb-3'>
                    <label className='form-label'>Your Password</label>
                    <input 
                    type='password'
                    className='form-control'
                    placeholder='Enter Password' 
                    value= {password}
                    onChange={handlePassword}/>
                </div>

                <button disabled={!email || !password} className='btn btn-primary'>Submit</button>
            </form>
    )
}

export default LoginForm;