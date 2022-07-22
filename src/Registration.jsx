import React from "react";
import './regis.css'
let numbertenth=()=>{
    alert('jhg');
     return(
         <>
             
         </>
     );
}
  const Registration=()=>{
        return(
            <>
                <div className="mainclass_reg">
                    <h1 className="registration_page">Registration From</h1><br/>
                    <from method="POST" action="/">
                       <div className="upperclass">
                            <div className="lowerclass">
                                <h2><span className="spantag">Student Data</span></h2>
                                <div className="inputfeald">
                                    <div className="inputbox">
                                        <label>First Name</label>
                                        <input type='text' placeholder=" First Name" name="fname" required/>
                                    </div>
                                    <div className="inputbox">
                                        <label>Last Name</label>
                                        <input type='text' placeholder=" Last Name" name="lname" required/>
                                    </div>
                                    <div className="inputbox">
                                        <label>Father Name</label>
                                        <input type='text' placeholder=" Father Name" name="tather" required/>
                                    </div>
                                    <div className="inputbox">
                                        <label>Mother Name</label>
                                        <input type='text' placeholder=" Mother Name" name="mother" required/>
                                    </div>
                                    <div className="inputbox">
                                        <label>Mobile No.</label>
                                        <input type='number' placeholder="Mobile No." name="mobile" required/>
                                    </div>
                                    <div className="inputbox">
                                        <label>E-male</label>
                                        <input type='emaile' placeholder="e-male" name="emale" required />
                                    </div>
                                    <div className="inputbox" name="gender">
                                        <label>Gender</label>
                                        <select required>
                                            <option disabled selected>Select Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                        <div className="inputbox">
                                            <label>D.O.B</label>
                                            <input type='date' name="date" required/>
                                        </div>
                                        <div className="inputbox" name="class">
                                            <label>Admission of Class</label>
                                            <select required>
                                                <option disabled selected>Label Of Class</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option onSelectCapture={numbertenth}>11</option>
                                            </select>
                                        </div>
                                        <div className="inputbox" name="address">
                                            <label>Address</label>
                                            <input type="text" placeholder="Address" required/>
                                        </div>
                                        <div className="inputbox"name="pin">
                                            <label>Pin Code</label>
                                            <input type="number" placeholder="Pin Code" required/>
                                        </div>
                                        <div className="submitbtn" >
                                        {/* <button type="submit">submit</button> */}
                                            <input type='submit' value='Submit ►'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                     </from>
                 </div>
            </>
        );
    }
    export default Registration;