import React from 'react'
import './MessageList.css'

function MessageList(props) {
  const { messages } = props

  return (
    <div className="MessageList">
      {messages.map((message) => {
        const date = new Date(message.createdAt);
        const formattedDate = date.toLocaleDateString()
        const formattedTime = date.toLocaleTimeString()

        return(
        <div className="Message" key={message.id}>
          <h5>{message.content}</h5>
          <p className="Message-author">{'user_id: ' + message.sender.name}</p>
          <p className="Message-author">{formattedDate + ' ' + formattedTime}</p>
        </div>
        )
})}
    </div>
  )
}

export default MessageList

<!-- Updated: 2024-03-15T14:04:00.312077 -->

<!-- Updated: 2024-05-02T13:00:00.312077 -->
