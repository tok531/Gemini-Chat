import { Link } from "react-router-dom";
import "../Style/Header.css"
import logo from "../images/logo.png"
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";


const Header = () => {
    return(
      <header className='fixed-top'>
        <div className='head d-flex justify-content-between'>
          <div className="logo-div">
            <img src={logo} width="70px" height="50px"/>
            <Link to="/">Wall-E</Link>  
          </div> 
          
        </div>
        <Navbar />

      </header>
    )

}
export default Header;