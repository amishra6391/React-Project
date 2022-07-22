import React from "react";
import './teacher.css';

    function Teacher1(propes){
        return (
            <>
            <div className="temp">
            <div className="teacher_main_class">
              <div className='teacher_box'>
               <h4 class="branch_teacher">{propes.tecpost}</h4>
                 <div className="teacher_deta">
                  <div className="linebreak">
                    <b> Teacher Name:-</b>{propes.teaname}
                  </div>
                  <div className="linebreak">
                     <b>Experince:- </b>{propes.teaexp}
                  </div>
                  <div className="linebreak">
                    <b>Science:- </b>{propes.sciencethiscollege}
                  </div>
                  <div className="linebreak">
                     <b>Subject:- </b>{propes.teasubj}
                  </div>
                  <div className="linebreak">
                     <b>Status:- </b>{propes.teapost}
                  </div>
                  <div className="contact">
                     <b>Mobile Number:- </b><span>{propes.teacon}</span>
                  </div>
                  <div className="contact">
                     <b>E-male:- </b><span>{propes.teaconmale}</span>
                  </div>
                  <div className="linebreak">
                     <b>Meeting Time:- </b>{propes.teameettime}
                  </div>
                </div>                
               </div>
            </div>
            </div>
            </>
        );
    }
    export default Teacher1;     