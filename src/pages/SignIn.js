// import { useRef } from "react"
// import { useNavigate, NavLink } from "react-router-dom"

// const SignIn = ({ signIn }) => {
//   const formRef = useRef()
//   const navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const formData = new FormData(formRef.current)
//     const data = Object.fromEntries(formData)
//     const userInfo = {
//       user: { email: data.email, password: data.password },
//     }
//     try {
//       await signIn(userInfo)
//       navigate("/")
//     } catch (error) {
//       console.error(error)
//     }
//     e.target.reset()
//   }

//   return (
//     <div className="auth-body">
//       <h2 className="header">Sign In</h2>
//       <form className="form-div" ref={formRef} onSubmit={handleSubmit}>
//         <label>
//           Email:{" "}
//           <input
//             className="field auth-flex"
//             type="email"
//             name="email"
//             placeholder="email"
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Password:{" "}
//           <input
//             className="field auth-flex"
//             type="password"
//             name="password"
//             placeholder="password"
//             required
//           />
//         </label>
//         <br />
//         <input className="actions" type="submit" value="Sign In" />
//         <div className="links">
//           Not registered yet?{" "}
//           <NavLink to="/signup">
//             <u>Sign Up</u>
//           </NavLink>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default SignIn

import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = ({signin}) => {
  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user": {
        email: data.email,
        password: data.password,
      }
    }
    signin(userInfo)
    navigate("/")
    e.target.reset()
  }

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name="email" placeholder='email'/>
        <br />
        Password: <input type='password' name='password' placeholder='password' />
        <br />
        
        <input type='submit' value='submit'/>
      </form>
      <br />
     
    </div>
  )
}

export default SignIn