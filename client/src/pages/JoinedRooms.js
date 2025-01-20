import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as chatApi from '../api/Chat'

const JoinedRooms = () => {
  const [chatRooms, setChatRooms] = useState(null)

  const getRooms = async () => {
    const rooms = await chatApi.getJoinedRooms()
    setChatRooms(rooms.data)
  }

  useEffect(() => {
    getRooms()
  }, [])

  return (
    <>
      <div className='container-fluid'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>No</th>
              <th scope='col'>Room Name</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {chatRooms &&
              chatRooms.map((room, index) => (
                <tr key={index}>
                  <th scope='row'>{index+1}</th>
                  <td>{room.name}</td>
                  <td>
                    <Link to={'/chat/' + room._id} state={{ name: room.name }}>
                      {' '}
                      Chat
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default JoinedRooms

<!-- Updated: 2024-03-06T14:47:00.312077 -->

<!-- Updated: 2024-05-02T18:43:00.312077 -->
