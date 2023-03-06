import React from 'react'
import Changepassword from '../../src/components/forgetpassword/Changepassword'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

function index() {
    return (
        <LayoutHeader title="Change-password">
            <meta
                name="description"
                content="Meta description for the About page"
            />
            <Changepassword />
        </LayoutHeader>
    )
}

export default index