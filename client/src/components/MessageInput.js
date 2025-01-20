import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { userId } from '../api/Users'
import './MessageInput.css'

function MessageInput({ socket }) {
  const [inputValue, setInputValue] = useState('')
  const { id } = useParams()

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    socket.emit('message', {
      roomId: id,
      sender: userId(),
      content: inputValue,
    })
    setInputValue('')
  }

  return (
    <form className="MessageInput" onSubmit={handleSubmit}>
      <input
        className="MessageInput-input"
        type="text"
        placeholder="Type your message here"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="MessageInput-button" type="submit">
        Send
      </button>
    </form>
  )
}

export default MessageInput

<!-- Updated: 2024-02-27T12:17:00.312077 -->

<!-- Updated: 2024-04-02T16:26:00.312077 -->

<!-- Updated: 2024-06-14T12:55:00.312077 -->

<!-- Updated: 2024-07-25T18:19:00.312077 -->

<!-- Updated: 2024-08-23T13:50:00.312077 -->

<!-- Updated: 2024-09-13T13:23:00.312077 -->

<!-- Updated: 2024-09-13T17:52:00.312077 -->
