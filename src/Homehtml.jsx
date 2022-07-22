import React, { useState } from "react";
import axios from "axios";
import './homepage.css';
import { useLocation, useNavigate } from "react-router-dom";
    const Homehtml=(prose)=>{

        const location = useLocation();
        const historyy = useNavigate();
        // console.log(historyy);
        // useNavigate come in version v this is work like as useHistory
        //using this  ╕ code i am going to connect with data base but here i am not ablue to connect with database
        // so this code is use less  
        const [name, setName]= useState('');
        const [email, setEmail]= useState('');
        const [query, setQuery]= useState('');
        const [message, setmessage]= useState('');

        const handleusername=(event)=>{
            const user_name= event.target.value;
            console.log(user_name);
            setName(user_name);
        }
        const handleuseremail=(event)=>{
            const user_email= event.target.value;
            console.log(user_email);
            setEmail(user_email);
        }
        const handleuserquery=(event)=>{
            const user_query= event.target.value;
            console.log(user_query);
            setQuery(user_query);
        }
        const submituser= async (e)=>{
            e.preventDfault();
            const userData={user_name:name,user_email:email,user_query:query};
            await axios.post('http://localhost/phpmyadmin/db_structure.php?server=1&db=sdic&table=query',JSON.stringify(userData))
            .then(result=>{ setmessage(result.data.msg) ;console.log(result.data);});
            
        }
        const sendto=()=>{
       
            historyy('./Student')
            // heare i am defining the path of the page where be go
        }
                return(
                    <>
                        <header className="home_page">
                        <div className="Loc_goback">
                             <span className="loca">
                                This Is Your  {location.pathname.replace('/','Home')} Page
                            </span>
                            <button className="topper" onClick={sendto}>Topper Student</button>
                        </div>
                            <div className="top_class">
                                <marquee className="marquee_class">
                                        <span className="welcome">{prose.collegeName}</span>
                                        <span className="news">&#127775;&#127775;{prose.student_news}&#127775;&#127775;</span>
                                        <span className="holy_day">{prose.holy_day}</span>
                                </marquee>
                            </div>
                                <div className="img_animation">
                                        {/* this is space for the animated img */}
                                </div>
                                <div className="top_class">
                                    <marquee className="marquee_class">
                                        <span className="news bottom">&#8902;&#8902;&#8902;{prose.admission_news}&#8902;&#8902;&#8902;</span>
                                        <span className="other_news">{prose.other_News}</span>
                                    </marquee>
                                </div>
                        </header>
                        <hr/>
                        <section>
                            <div className="about_college">
                                <article className="all_artical">
                                    <p className="about_home_p">
                                    You will be very happy and happy to know that in your nearest area which comes under
                                     Awadh region, from where you can get supernatural feeling of getting your children 
                                     graduate from commerce, arts and science faculties through skilled and trained and 
                                     experienced principals. make your life worthwhile
                                        Excellencies, you know that education is a unique means of building the present and future. In a rural country like
                                        India, no special attention has been paid to the education of the rural population. There is a long tradition of
                                        voluntary efforts in our country. Jata Shankar Shukla Prabandhak ji laid the foundation of wonderful stay in the rural
                                        area of ​​Chhapia development block and holy village Guru village located in the eastern part of Gonda district in the 
                                        form of a school, in which keeping in mind the all round development of your children, proper curriculum was prepared.
                                            has been arranged
                                    </p>
                                </article>
                                    <div className="img_principal">
                                        <img src="principal_sir.jpg" 
                                            alt="principal_sir img not found"
                                            className="principal_sir_img"
                                            title="Principal Teacher"

                                        />
                                    </div>
                            </div>
                        </section>
                        <div className="map_feedbacl">
                            <div className="current_location">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14225.110811996128!2d82.42110165!3d26.958103799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990b326e6376d6d%3A0x8d15d11c2d89a476!2sSharvan%20Dham%20Inter%20College!5e0!3m2!1sen!2sin!4v1651341026845!5m2!1sen!2sin" title="Google Map location" alt="GPS problem"/>
                            </div>
                            <form onSubmit={submituser} action="https://formspree.io/f/xknyygpo" method="POST">
                                <h1 className="h1">Query</h1>
                                        <label>First Name</label>
                                            <input type="text" id="name" name="name"
                                             placeholder="Your name.." required autoComplete="off"
                                             onChange={(e)=> handleusername(e)}/>
                                        <label >Roll Number</label>
                                            <input type="Number" id="email" name="email"
                                            placeholder="Enter Your Roll Number" required autoComplete="off"
                                            onChange={(e)=> handleuseremail(e)}
                                            />
                                        <label>Query</label>
                                            <textarea id="yourquery" name="yourquery"
                                            placeholder="Write query ..." style={{height:'200px'}} required autoComplete="off"
                                            onChange={(e)=> handleuserquery(e)}
                                            />
                                        <label>
                                        <div className="check">
                                                <input type='checkbox' required/><span> 
                                                Your email will be saved to inform you  that your problems have solved</span>
                                    </div>
                                    </label>
                                    <label>
                                    <input type="submit" name="submit" value="Submit" className="home_page_logi"/>
                                    <input type="reset" value="Reset" className="home_page_logi"/>
                                    </label>     
                            </form>
                        </div>
                    </>
                );
            }
            export default Homehtml;