import React from 'react'
import Womenpreneurs from '../../../src/components/middleheaderchilderns/ourwomenpreneurs/Womenpreneurs'

function index({dark,setdark}) {
    return (
        <div>
            <Womenpreneurs setdark={setdark} dark={dark}/>
        </div>
    )
}

export default index