import "../Style/ChatWindow.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faBars, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import helprobot from "../images/help.png"
import thinkimg from "../images/search.png"
import { useState } from "react";
import runChat from "../geminiApi"
import { useNavigate } from "react-router-dom";

const Chat = ()=>{
  const [input, setInput] = useState("")
  const [question, setQuestion] = useState("")
  const [result, setResult] = useState("")


  const handleChange=(e)=>{
    setQuestion("")
    setInput(e.target.value)
    setResult("")
  }
  const chatAi = async()=>{
    setQuestion(input)
    const resultAi= await runChat(input)
    setResult(resultAi)
  }
 
  return (
    <>
    <div className="chatwindow container-fluid ">

        <div className="questionsDiv fixed-top">
          <button className="newChat" ><FontAwesomeIcon icon={faCirclePlus} className="plusChat" /> &nbsp;<b>New Chat</b></button>
        </div>

        <div className="chatDiv">
          <img src={helprobot}/>
          <div className="chatinput">
            <div className="conversation" >
              <div className="QA">
                <p className="yourQ" style={question.length==0?{display:"none"}:{display:"inline-block"}} >{question}</p>
                <p className="AIanswer"style={result.length==0&&question.length==0?{display:"none"}:{display:"inline-block"}}> {result.length==0&&question.length!==0?<><img src={thinkimg}/><span>let me think</span></>:result}</p>
              </div>
              <input type="search" placeholder="Enter your question" onChange={handleChange}/>
              <button onClick={chatAi}><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
          </div>

        </div>

    </div>

    </>
  )

}

export default Chat;