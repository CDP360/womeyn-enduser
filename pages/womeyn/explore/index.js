import React from 'react'
import Explore from './../../../src/components/middleheaderchilderns/explore/Explore';




function index({dark,setdark}) {
    return (
        <div>
            <Explore setdark={setdark} dark={dark} />
        </div>
    )
}

export default index    