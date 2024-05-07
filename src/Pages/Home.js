import helloimg from "../images/hello.png"
import "../Style/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faClock, faCommentsDollar, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";


const Home = ()=>{
  const navigate = useNavigate()
  const gotochat = ()=>{
    navigate("/Chat")

  }
    return(
        <>
        <div className="sec1 ">
            <div className="sec1-img">
                <img src={helloimg}/>
            </div>
            <div className="sec1-message">
                <h1>My name is Wall-E,</h1>
                <h3>an AI model to help you any time</h3>
                <button className="btn btn-outline-dark start-btn" onClick={gotochat}><Link to="/ChatWindow"><FontAwesomeIcon className="arrow" icon={faArrowRight}/></Link>&nbsp; let's start converstaion</button>
            </div>
        </div>
        {/* sec1 ////////////////////////////////////////////////////// */}
        
        
        </>
    )

}
export default Home