import React from "react";
import Photo from "./Photo";

    function Photolink(){
        return(
            <>
                <Photo
                    thisphoto='color_logo.jpg'
                    altn='01 tool is set photo not found'
                    title='Logo Of College' 
                />
                <Photo 
                    thisphoto='photo_staff.jpg'
                    altn='02 tool is set but photo not found'
                    title='2019 Bach 10 and 12 Toper'
                />
                <Photo 
                thisphoto='photo_girls.jpg'
                altn='03 tool is set photo not found'
                title='Women Protection traning'
                /> 
                <Photo 
                thisphoto='main_photo.jpg'
                altn='03  tool is set photo not found'
                title=' Inner view'
                />
                <Photo 
                thisphoto='photo_staff.jpg'
                altn='03  tool is set photo not found'
                title='2019 Bach 10 and 12 Toper'
                />
            </>
        );

    }
export default Photolink;