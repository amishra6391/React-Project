import React from "react";
import './stu.css'
    const Studentprop=(prop)=>{
        return(
            <>  
                <div className="student_main_class">
                 <div className="student_submain_class">
                    <img src="dp.png" className="stu_img_class" alt="img not found"/>    
                        <div className="stu_box">
                            <div className="stu_data">
                                <b>Batch:-</b>{prop.passYear}
                            </div>
                            <div className="stu_data">
                                <b>College Rank:-</b>{prop.stuRank}
                            </div>
                            <div className="stu_data">
                                <b>Roll Number:-</b>{prop.rollNumber}
                            </div>
                            <div className="stu_data">
                                <b>Name:- </b>{prop.stuName}
                            </div>
                            <div className="stu_data">
                                <b>Class:- </b>{prop.stuClass}
                            </div>
                            <div className="stu_data">
                                <b>Father Name:- </b>{prop.fathName}
                            </div>
                            <div className="stu_data">
                                <b>{prop.Status}</b>{prop.stu_current_status}
                            </div>
                        </div>
                    </div>
                  </div>
            </>
        );
    }
export default Studentprop;