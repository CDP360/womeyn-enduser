import React from 'react'
import LayoutHeader from '../../../../src/components/Layoutheader/LayoutHeader'
import Womenpreneusdetails from '../../../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenpreneursdetails/Womenpreneusdetails'



function index({ dark, setdark }) {
    return (
        <LayoutHeader title="product" dark={dark} setdark={setdark}>
            <Womenpreneusdetails />
        </LayoutHeader>
    )
}

export default index