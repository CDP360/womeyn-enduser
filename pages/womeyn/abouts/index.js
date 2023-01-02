import React from 'react'
import Aboutus from './../../../src/components/middleheaderchilderns/abouts/Aboutus';



function index({dark,setdark}) {
    return (
        <div>
           <Aboutus setdark={setdark} dark={dark}/>
        </div>
    )
}

export default index