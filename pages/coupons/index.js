import React from 'react'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';
import Allcoupons from '../../src/components/allcoupons/Allcoupons';

function index() {
    return (
        <LayoutHeader title={"Coupons"}>
            <Allcoupons />
        </LayoutHeader>
    )
}

export default index