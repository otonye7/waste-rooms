const Registerform = ({name, handleName, email, handleEmail, password, handlePassword, handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit} className='mt-3'>
                <div className='form-group mb-3'>
                    <label className='form-label'>Your Name</label>
                    <input 
                    type='text'
                    className='form-control'
                    placeholder='Enter Name' 
                    value= {name}
                    onChange={handleName}/>
                </div>

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

                <button className='btn btn-primary'>Submit</button>
            </form>
    )
}

export default Registerform;