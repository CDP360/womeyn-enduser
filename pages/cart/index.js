import React from 'react'
import Cart from '../../src/components/cart/Cart'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

function index() {
    return (
        <LayoutHeader title="Cart">
            <Cart />
        </LayoutHeader>
    )
}

export default index