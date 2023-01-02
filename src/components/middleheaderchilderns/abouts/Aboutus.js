import React from 'react'
import Layout from '../../../../pages/layout'
import LayoutHeader from '../../Layoutheader/LayoutHeader'

function Aboutus({dark,setdark}) {
    return (
        <div>
            <div>
                <LayoutHeader setdark={setdark} dark={dark}/>
                Aboutus 
            </div>
        </div>
    )
}

export default Aboutus