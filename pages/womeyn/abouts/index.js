import React from 'react'
import LayoutHeader from '../../../src/components/Layoutheader/LayoutHeader';
import Aboutus from './../../../src/components/middleheaderchilderns/abouts/Aboutus';



function index({ dark, setdark }) {
    return (
        <LayoutHeader setdark={setdark} dark={dark} title="Aboutus">
            <Aboutus />
        </LayoutHeader>
    )
}

export default index