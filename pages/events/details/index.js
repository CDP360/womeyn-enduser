import React from 'react'
import LayoutHeader from '../../../src/components/Layoutheader/LayoutHeader';

import Eventsdetails from './../../../src/components/middleheaderchilderns/eventsupdate/eventsdetails/Eventsdetails';

function index() {
    return (
        <LayoutHeader title="eventsdetails">
            <meta
                name="description"
                content="Meta description for the About page"
            />
            <Eventsdetails />
        </LayoutHeader>

    )
}

export default index