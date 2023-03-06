import React from 'react'
import Ourprofile from '../../src/components/userprofile/Ourprofile';
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';

function index({ setdark, dark }) {
    return (
        <LayoutHeader title="Women-profile" dark={dark} setdark={setdark}>
            <meta
                name="description"
                content="Meta description for the About page"
            />
            <Ourprofile />
        </LayoutHeader>
    )
}

export default index