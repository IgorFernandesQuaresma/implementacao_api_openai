import React, { useContext } from "react"
import { useState } from 'react'
import './ChatBox.css'
import {makerequest} from '../../api/api'
import SideMenu from '../Menu/Menu'
import Message from '../Message/Message'
import { OpenContext } from "../../context/ContextOpen"

function ChatBox() {
    const [input, setInput] = useState("")
    const [chatlog, setChatlog] = useState([{
      user : 'gpt', 
      message: 'Como posso te ajudar hoje?'
    }])
  
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
    async function handleSubmit(e) {
        e.preventDefault()
  
        try {
          
          console.log("Enviando requisição com o prompt:", input);
  
          setChatlog((prevChatlog) => [
            ...prevChatlog, 
            {
              user: 'me',
              message: `${input}`
            }
          ]);
      
          
          setInput('');
  
          await delay(1000);
  
          const response = await makerequest({ prompt: input });
    
         
          console.log("Resposta recebida da API:", response);
          
          setChatlog((prevChatlog) => [
        ...prevChatlog, 
        {
          user: 'gpt',
          message: `${response}`
        }
      ]);
  
    } catch (error) {
      
      console.error("Erro ao fazer a requisição:", error);
    }
  }


  const {open, toggleOpen} = useContext(OpenContext)


    function abrirFecharChat () {
        toggleOpen()
        console.log(open)
    }
  
    return (
      <>
        
        <section className='chatbox'>
          <div className="close">
            <div className="fechado" onClick={abrirFecharChat}>X</div>
            </div>
            <div className='chat-log'>
                {chatlog.map((message, index) => (
                    <Message
                        key={index}
                        message={message}
                    />
                ))}
            </div>
            <div className='chat-input-holder'>
                <form onSubmit={handleSubmit}>
                    <input 
                        rows='1'
                        className='input-text'
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                </form>
            </div>
</section>

        
      </>
    )
  }
  
  export default ChatBox