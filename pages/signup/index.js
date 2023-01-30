import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Signup from '../../src/components/signup/Signup'

function index({dark,setdark}) {
    return (
        <LayoutHeader title="Women-signup" setdark={setdark} dark={dark}>
            <Signup />
        </LayoutHeader>
    )
}

export default index
