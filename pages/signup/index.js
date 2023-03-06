import React from 'react'
import Signup from '../../src/components/signup/Signup';

import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';

function index({ dark, setdark }) {
    return (
        <LayoutHeader title="Women-signup" setdark={setdark} dark={dark}>
            <meta
                name="description"
                content="Meta description for the About page"
            />
            <Signup />
        </LayoutHeader>

    )
}

export default index
