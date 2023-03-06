import React from 'react'


import LayoutHeader from '../../../src/components/Layoutheader/LayoutHeader'
import Womenpreneusdetails from './../../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenpreneursdetails/Womenpreneusdetails';

function index() {
    return (
        <LayoutHeader title="Product">
            <meta
                name="description"
                content="Meta description for the About page"
            />
            <Womenpreneusdetails />
        </LayoutHeader>


    )
}

export default index