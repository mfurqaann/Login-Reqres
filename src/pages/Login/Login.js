import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
   let navigate = useNavigate()

   const [inputEmail, setInputEmail] = useState('')
   const [inputPassword, setInputPassword] = useState('')

   const emailHandler = (e) => {
      setInputEmail(e.target.value)
   }

   const passwordHandler = (e) => {
      setInputPassword(e.target.value)
   }

   const submitHandler = (e) => {
      e.preventDefault()

      if (inputEmail.trim().length === 0 || inputPassword.trim().length === 0) {
         return alert('email dan password tidak boleh kosong')
      }

      setInputEmail('')
      setInputPassword('')

      navigate('/list-user')
   }

   return (
      <Container className="container-login">
         <div className="login">
            <div className="login__header"></div>
            <div className="login__title">
               <p>Sign in here</p>
            </div>

            <Form onSubmit={submitHandler}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                     type="email"
                     name="email"
                     value={inputEmail}
                     onChange={emailHandler}
                     placeholder="Enter email"
                  />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                     type="password"
                     name="password"
                     value={inputPassword}
                     onChange={passwordHandler}
                     placeholder="Password"
                  />
               </Form.Group>
               <Form.Group
                  className="mb-3 forgot-pass"
                  controlId="formBasicCheckbox"
               >
                  <div>
                     <a href="/">Forgot your password ?</a>
                  </div>
               </Form.Group>
               <Button variant="primary" type="submit">
                  Login
               </Button>
            </Form>
         </div>
      </Container>
   )
}

export default Login
