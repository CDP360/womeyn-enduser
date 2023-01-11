import React from 'react'
import LayoutHeader from '../../../src/components/Layoutheader/LayoutHeader';
import Explore from './../../../src/components/middleheaderchilderns/explore/Explore';
function index({ dark, setdark }) {
    return (
        <LayoutHeader setdark={setdark} dark={dark} title="Explore">
            <Explore  />
        </LayoutHeader>
    )
}

export default index    