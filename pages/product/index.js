import React from 'react'



import Womenpreneusdetails from './../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenpreneursdetails/Womenpreneusdetails';
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';


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