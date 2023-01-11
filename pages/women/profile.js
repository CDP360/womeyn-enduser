import React from 'react'
import Ourprofile from '../../src/components/userprofile/Ourprofile';
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

function profile({ setdark, dark }) {
    return (
        <LayoutHeader title="women-profile" dark={dark} setdark={setdark}>
            <Ourprofile />
        </LayoutHeader>
    )
}

export default profile