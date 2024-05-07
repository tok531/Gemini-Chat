import React, {  useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Style/Navbar.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Navbar = ()=>{
    const navList = useRef()
    const displaynavbar =()=>{
        let classNames = navList.current.className.split(" ")
        console.log(classNames)
        let existFlag = 0

        for(let i=0; i<classNames.length ;i++){
            if(classNames[i]==='d-none'){
                console.log("here")
                classNames.splice(i,1)
                navList.current.className = classNames.join(" ")
                existFlag = 1

            }
        }
        if(existFlag == 0){
            navList.current.className = navList.current.className + " d-none"
        }
        console.log(navList.current.className)
    }
    return(
        <>
        <button className=" navBtn " type="button" onClick={displaynavbar} >
        <FontAwesomeIcon icon={faBars} />
        </button>
        <nav className="navbar navbar-expand" ref={navList}>
          
          <div className="collapse navbar-collapse py-3" id="navbarNavDropdown" >
            <ul className="navbar-nav container " >
              <li className="nav-item  text-start text-md-center ">
                  <Link className="nav-link " href="#">AI Chat</Link>
              </li>
              <li className="nav-item   text-start text-md-center ">
                  <Link className="nav-link " href="#">AI Image Generator</Link>
              </li>
              <li className="nav-item   text-start text-md-center">
                  <Link className="nav-link " href="#">AI Video</Link>
              </li> 
              <li className="nav-item  text-start text-md-center">
                  <Link className="nav-link" href="#">Text to Speech</Link>
              </li> 
              <li className="nav-item  text-start text-md-center login-icon">
                  <Link className="nav-link" href="#"><FontAwesomeIcon icon={faRightToBracket} />&nbsp; Login</Link>
              </li> 
             
                   
            </ul>  
          </div>
        </nav>
        </>
        
    )
}

export default Navbar;