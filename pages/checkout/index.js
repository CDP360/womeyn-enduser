import React from 'react'
import Checkout from '../../src/components/checkout/Checkout'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

function index({ dark, setdark }) {
    return (
        <LayoutHeader title="Checkout" dark={dark} setdark={setdark}>
            <meta
                name="description"
                content="Meta description for the About page"
            />
            <Checkout />
        </LayoutHeader>
    )
}

export default index