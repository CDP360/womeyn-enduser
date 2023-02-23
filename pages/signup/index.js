import React from 'react'
import Signup from '../../src/components/signup/Signup';

import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';

function index({dark,setdark}) {
    return (
        <LayoutHeader title="Women-signup" setdark={setdark} dark={dark}>
        <Signup/>
        </LayoutHeader>
    
    )
}

export default index
