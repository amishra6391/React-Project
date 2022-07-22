import React from "react";
import './photoimg.css'
    function Photo(prop){
        return(
            <>
                <div className="photo_main_class">
                    <div className="photo_child_class">
                        <img src={prop.thisphoto} 
                        alt={prop.altn} 
                        className="img_class"
                        title={prop.title}
                        />
                    </div>
                </div>
            </>
        );
    }
    export default Photo;