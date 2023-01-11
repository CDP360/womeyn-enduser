
import React from 'react'
import Login from '../../src/components/login/Login'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

function index({ dark, setdark }) {
    return (
        <LayoutHeader title="women-login" setdark={setdark} dark={dark}>
            <Login />
        </LayoutHeader>
    )
}

export default index;