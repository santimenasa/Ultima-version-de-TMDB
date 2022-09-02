import React from 'react'

const Login = () => {
  return (
    <div className='logginForm'>
      <h3 className="title is-3">Log in</h3>
      <form>
        <label className="label my-3">Email</label>
        <input className="input" type="text" placeholder="Email" />
        <label className="label my-3">Password</label>
        <input className="input" type="text" placeholder="Password" />

        <button className="button is-link my-5">Submit</button>
        </form> 
    </div>
  )
}

export default Login
