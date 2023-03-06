import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Womenpreneurs from './../../src/components/middleheaderchilderns/ourwomenpreneurs/Womenpreneurs';
function index() {
    return (
        <LayoutHeader title="Womeynpreneurs">
            <meta
                name="description"
                content="Meta description for the About page"
            />
            <Womenpreneurs />
        </LayoutHeader>

    )
}

export default index