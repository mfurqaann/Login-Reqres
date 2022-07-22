import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ListUser.css'
import { Container } from 'react-bootstrap'
import logodefault from '../../assets/user.jfif'

const ListUser = () => {
   const [page, setPage] = useState(1)
   const [isLoading, setIsLoading] = useState(false)
   const [userList, setUserList] = useState([])

   const [isData, setIsData] = useState(false)

   const getData = async () => {
      setIsLoading(true)
      // https://reqres.in/api/users?page=2
      try {
         const response = await axios.get(
            `https://reqres.in/api/users?page=${page}`
         )

         if (response.data.data.length === 0) {
            setPage(1)
         }

         const dataUser = await response.data.data
         setUserList(dataUser)

         setIsLoading(false)
      } catch (error) {
         console.log(error)
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
         <div className="card" key={user.id}>
            <div className="card__item">
               <div className="card__header">
                  <img src={user.avatar} />
               </div>
               <div className="card__name">
                  <h3>
                     {user.first_name} {user.last_name}
                  </h3>
               </div>
            </div>
         </div>
      )
   })

   useEffect(() => {
      getData()
   }, [page])

   return (
      <Container fluid>
         <div className="container-listuser">
            <div>
               <h1>List User</h1>
            </div>
            <div className="list">{isLoading ? 'Loading...' : DisplayUser}</div>
            <div className="buttonNext">
               <button onClick={NextPage}>Next Page</button>
               <button onClick={PreviousPage}>Previous Page</button>
            </div>
         </div>
      </Container>
   )
}

export default ListUser
