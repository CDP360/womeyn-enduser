import React from 'react'
import Header from '../../src/components/header/Header'
import MobileHeader from '../../src/components/header/Mobileheader/MobileHeader'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'


function Layout({ dark, setdark }) {
    return (
        <>
       
            <LayoutHeader setdark={setdark} dark={dark} />

        </>
    )
}

export default Layout