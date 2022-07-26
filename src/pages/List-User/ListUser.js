import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ListUser.css'
import { Container } from 'react-bootstrap'
import Card from '../../components/Card/Card'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const ListUser = () => {
   let navigate = useNavigate();
   let location = useLocation();
   let token = location.state;
   console.log(token)
   const [page, setPage] = useState(1)
   const [isLoading, setIsLoading] = useState(false)
   const [userList, setUserList] = useState([])



   const getData = async () => {
      setIsLoading(true)
      try {
         const response = await axios.get(
            `https://reqres.in/api/users?page=${page}`
         )

         if (response.data.data.length === 0) {
            setPage(1)
         }

         console.log(response.status)

         const dataUser = await response.data.data
         setUserList(dataUser)

         setIsLoading(false)
      } catch (error) {
         console.log(error.response.status)
      }
   }

   const NextPage = () => {
      setPage((prevVal) => prevVal + 1)
   }
   const PreviousPage = () => {
      setPage((prevVal) => prevVal - 1)
   }


   let DisplayUser = userList.map((user) => {
      return (
         <div key={user.id}>
            <Card
               id={user.id}
               first_name={user.first_name}
               last_name={user.last_name}
               isLoading={isLoading}
            />
         </div>
      )
   })
   useEffect(() => {
      getData()
   }, [page])

   if (token === null) {
      navigate('/')
      return alert('Login dulu ya!')
   }

   return (
      <Container fluid>
         <div className="container-listuser">
            <div>
               <h1>List User</h1>
            </div>
            <div >
               <div className="list">{isLoading ? 'Loading...' : DisplayUser}
                  <Outlet />
               </div>
               {!isLoading ?
                  <div className="buttonNext">
                     <button onClick={NextPage}>Next Page</button>
                     <button onClick={PreviousPage}>Previous Page</button>
                  </div>
                  : ''}

            </div>
         </div>
      </Container>
   )
}

export default ListUser
