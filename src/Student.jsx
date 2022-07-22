import React from "react";
import Studentprop from './Studentprop';

        const Student=()=>{
            return(
                    <>
                        <div className="lastchanze">
                            <h1 className="top_h1">toper student's List</h1>
                         </div>
                            <Studentprop
                            stuImgSrc='pho.jpg'
                                passYear='2013'
                                rollNumber='123456'
                                stuRank='1'
                                stuName='Ankit Singh'
                                stuClass='12'
                                fathName='Ram Prakash Singh'
                                Status='Current startu:- '
                                stu_current_status='Teacher'

                            />
                            <Studentprop
                            stuImgSrc='pho.jpg'
                                passYear='2013'
                                rollNumber='145236'
                                stuRank='2'
                                stuName='Ram Ji Mishra'
                                stuClass='12'
                                fathName='Dasrath Mishra'
                                Status=''
                                stu_current_status=''

                            />
                            <Studentprop
                            stuImgSrc='pho.jpg'
                                passYear='2013'
                                rollNumber='145236'
                                stuRank='2'
                                stuName='Ram Ji Mishra'
                                stuClass='12'
                                fathName='Dasrath Mishra'
                                Status=''
                                stu_current_status=''

                            />
                            <Studentprop
                            stuImgSrc='pho.jpg'
                                passYear='2014'
                                rollNumber='644878'
                                stuRank='1'
                                stuName='Arif Khan'
                                stuClass='10'
                                fathName='Amir Khan'
                                Status=''
                                stu_current_status=''

                            />
                            <Studentprop
                            stuImgSrc='pho.jpg'
                                passYear='2014'
                                rollNumber='54654'
                                stuRank='2'
                                stuName='shubham verma'
                                stuClass='10'
                                fathName='Arvind Verma'
                                Status=''
                                stu_current_status=''

                            />
                            <Studentprop
                            stuImgSrc='pho.jpg'
                                passYear='2015'
                                rollNumber='546546'
                                stuRank='3'
                                stuName='Aman Shukala'
                                stuClass='10'
                                fathName='Ashutosh Shukla'
                                Status=''
                                stu_current_status=''

                            />
                    </>
            );

        }
        export default Student;