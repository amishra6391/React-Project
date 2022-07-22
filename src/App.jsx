import React from "react";
import { Route, Routes,} from "react-router-dom";
import Navi  from "./Navi";
import Homeprose from "./Homeprose";
import About from "./About";
import Teaprom from "./Teaprom";
import Student from "./Student";
import Classprop from "./Classprop"
import Photolink from './Photolink';
import Registration from "./Registration";
import Login from "./Login";
import NotFound from "./NotFound";
import Footer from "./Footer";
import Currenttime from './Currenttime';
import Fourthclasslist from "./Fourthclasslist";
import Forgotpassword from "./Fourthclasslist";
    const App= () => {
       return(
           <>
                <Navi/>
                    <Routes>
                        <Route path="/" element={<Homeprose/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/Student" element={<Student/>}/>
                        <Route path="/Teaprom" element={<Teaprom/>}/>
                        <Route path="/Classprop" element={<Classprop/>}/>
                        <Route path="/Photolink" element={<Photolink/>}/>
                        <Route path="/Currenttime" element={<Currenttime/>}/>
                        <Route path="/Registration" element={<Registration/>}/>
                        <Route path="/Login" element={<Login/>}>
                            <Route path="Login/Forgotpassword" element={<Forgotpassword/>}/>
                        </Route>
                        <Route path="*" element={<NotFound />}/>
                        <Route path="/Fourthclasslist" element={<Fourthclasslist/>}/>
                    </Routes>
                <Footer/>
           </>
       );
   };
export default App;