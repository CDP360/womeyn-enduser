import React from 'react'
import Forgetpassword from '../../src/components/forgetpassword/Forgetpassword'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

function index() {
    return (
        <LayoutHeader title="Forgetpassword">
            <meta
                name="description"
                content="Meta description for the About page"
            />
            <Forgetpassword />
        </LayoutHeader>
    )
}

export default index