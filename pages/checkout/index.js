import React from 'react'
import Checkout from '../../src/components/checkout/Checkout'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

function index() {
    return (
        <LayoutHeader title="Checkout">
            <Checkout />
        </LayoutHeader>
    )
}

export default index