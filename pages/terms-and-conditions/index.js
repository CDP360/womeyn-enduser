import React from 'react'
import Termsandconditions from '../../src/components/termsandconditions/Termsandconditions';
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';

function index() {
    return (
        <LayoutHeader title="Terms & conditions">
            <Termsandconditions />
        </LayoutHeader>
    )
}

export default index