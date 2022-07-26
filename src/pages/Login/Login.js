import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'

const Login = () => {
   let navigate = useNavigate()
   let isLogin = 1;

   const [inputEmail, setInputEmail] = useState('')
   const [inputPassword, setInputPassword] = useState('')
   const emailHandler = (e) => {
      setInputEmail(e.target.value)
   }

   const passwordHandler = (e) => {
      setInputPassword(e.target.value)
   }

   // let data = {
   //    email: inputEmail,
   //    password: inputPassword
   // }

   const loginUser = (email, password) => {
      try {
         return axios.post('https://reqres.in/api/login', {
            email: email,
            password: password
         })
      } catch (error) {
         console.error(error)
      }
   }





   const submitHandler = async (e) => {
      e.preventDefault()

      if (inputEmail.trim().length === 0 || inputPassword.trim().length === 0) {
         return alert('email dan password tidak boleh kosong')
      }

      if (inputPassword.trim().length <= 6) {
         return alert('password tidak boleh kurang dari 6 huruf')
      }

      const response = await loginUser(inputEmail, inputPassword)
      console.log(response)
      if (response.status === 200) navigate('/users', { state: response.data.token })

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
                     value={inputEmail}
                     onChange={emailHandler}
                     placeholder="Enter email"
                  />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                     type="password"
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
