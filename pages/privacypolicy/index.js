import React from 'react'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';
import Termsandconditions from './../../src/components/termsandconditions/Termsandconditions';

function index() {
    return (
        <LayoutHeader title={"privacypolicy"}>
            <Termsandconditions />
        </LayoutHeader>
    )
}

export default index