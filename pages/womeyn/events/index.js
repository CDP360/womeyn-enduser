import React from 'react'
import Eventsupdate from './../../../src/components/middleheaderchilderns/eventsupdate/Eventsupdate';



function index({dark,setdark}) {
    return (
        <div>
           <Eventsupdate setdark={setdark} dark={dark}/>
        </div>
    )
}

export default index