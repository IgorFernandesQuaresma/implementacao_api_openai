import React from "react"
import './Message.css'
import Avatar from "../Avatar/Avatar"

function Message({message}) {
    

    return (
        <>
        
       
            <div className={`chat-message ${message.user === 'gpt' ? 'chatgpt' : ''}`}>
                
            <div className="chat-message-center">
                <div className={`avatar ${message.user =='gpt' ? 'chatgpt': ''}`}>
                {message.user === "gpt" && (
                        <Avatar/>
                    )}
                </div>

                <div className="message">
                    {message.message}
                </div>
                
            </div>

            </div>

            

        </>
      )

}

export default Message