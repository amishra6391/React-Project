import React from "react";
import "./footer.css"
import { Link } from 'react-router-dom';
function Footer(){
	const contact=()=>{
		window.confirm('Mobile Number is +91 6767856980')
	}
	const deve=()=>{
		window.confirm("contact:- amishra.6391@gmail.com")
	}

return(
    <>
		<footer>
			<div className="footy">
					<div className="row">
					<div className="flex_wala">
						<div className="col-3 mobilestack">
							<h1>Study</h1>
									<ul>
									<li ><Link to="/"> Home </Link></li>
									<li><Link to="/About">About </Link> </li>
											<li className="nonmobile">More</li>
									</ul>
							</div>
							<div className="col-3 mobilestack">
								<h1>Study</h1>
									<ul>
									<li><Link to="/Photolink"> Photo</Link> </li>
											<li className="nonmobile">facebook</li>
											<li onClick={contact}>content</li>
									</ul>
							</div>
							<div className="col-3 mobilestack">
								<h1>Study</h1>
									<ul>
									<li className="nonmobile"><Link to="/Teaprom"> Teacher </Link></li>
									<li><Link to="/Fourthclasslist">4<sup>th</sup>Clsaa</Link></li>
									<li><Link to="/Login">Fee</Link></li>
									</ul>
							</div>
							<div className="col-3 mobilestack">
								<h1>Developed By</h1>
									<ul onClick={deve}>
										<li>Adarsh&nbsp;Mishra</li>
										<li>BCA III</li>
										<li></li>
									</ul>
							</div>
						</div>
						<h3 className="myname">&#169;2022 Developed By:-  Adarsh Mishra</h3>
						</div>
						
					</div>			
					
		</footer>

    </>
	);
}
export default Footer;