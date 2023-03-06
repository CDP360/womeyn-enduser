
import React from 'react'
import Login from '../../src/components/login/Login'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

function index({ dark, setdark }) {
    return (
        <LayoutHeader title="Women-login" setdark={setdark} dark={dark}>
            <meta
                name="description"
                content="Meta description for the About page"
            />
            <Login />
        </LayoutHeader>
    )
}

export default index;