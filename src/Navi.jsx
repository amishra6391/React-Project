import React from "react";
import { Link } from "react-router-dom";
import "./navig.css";

    const dropdownMenu=()=>{
        let x = document.getElementById("dropdownClick");
        if(x.className==="ulli_class")
		  	{
 				 x.className +=" responsive";
 			}
  		else
  		{
  			x.className="ulli_class"; 
			// x.className=" topnav"; if i add space betbeen "topnav" then i can only one time be cane open topnav
  		}
    }
    function Navi(){
            return(
                <>
                    <nav>
                        <div className="main_navi">
                               <ul className="ulli_class" id="dropdownClick">
                                 <li><Link to="/"> Home </Link></li>
                                 <li><Link to="/About">About </Link> </li>
                                 <li><Link to="/Teaprom"> Teacher </Link></li>
                                 <li><Link to="/Student"> Student</Link></li>
                                 <li><Link to="/Classprop"> syllabus</Link></li>
                                 <li><Link to="/Photolink"> Photo's</Link> </li>
                                 <li className="right"><Link to="/Login"> Fee pay </Link> </li>
                                 <li className="right"><Link to="/Registration"> Registration </Link> </li>
                                 <li class ="dropdownIcon"><Link to="" onClick={dropdownMenu}> &#9776;</Link> </li>
                             </ul>
                        </div>
                    </nav>
                </>
           );
        }
    export default Navi;