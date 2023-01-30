import React from 'react'
import LayoutHeader from '../../../src/components/Layoutheader/LayoutHeader'
import Womenpreneurs from '../../../src/components/middleheaderchilderns/ourwomenpreneurs/Womenpreneurs'

function index({ dark, setdark }) {
    return (
        <LayoutHeader dark={dark} setdark={setdark} title="Womeynpreneurs">
            <Womenpreneurs />
        </LayoutHeader>
    )
}

export default index