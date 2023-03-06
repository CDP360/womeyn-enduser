import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Explore from './../../src/components/middleheaderchilderns/explore/Explore';

function index({ dark, setdark }) {
    return (
        <LayoutHeader setdark={setdark} dark={dark} title="Explore">
            <meta
                name="description"
                content="Meta description for the About page"
            />
            <Explore />
        </LayoutHeader>

    )
}

export default index    