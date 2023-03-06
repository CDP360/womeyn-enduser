import React from 'react'

import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Eventsupdate from './../../src/components/middleheaderchilderns/eventsupdate/Eventsupdate';




function index() {
    return (
        <LayoutHeader title="Events">
            <meta
                name="description"
                content="Meta description for the About page"
            />
            <Eventsupdate />
        </LayoutHeader>


    )
}

export default index