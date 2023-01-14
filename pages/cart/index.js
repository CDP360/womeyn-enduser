import React from 'react'
import Cart from '../../src/components/cart/Cart'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

function index({ setdark, dark }) {
    return (
        <LayoutHeader title="Cart" setdark={setdark} dark={dark}>
            <Cart />
        </LayoutHeader>
    )
}

export default index