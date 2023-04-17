import React from 'react'
import Checkout from '../../src/components/checkout/Checkout'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

function index({ dark, setdark }) {
    return (
        <LayoutHeader title="Checkout" dark={dark} setdark={setdark}>

            <Checkout />
        </LayoutHeader>
    )
}

export default index