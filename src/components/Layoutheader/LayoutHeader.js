import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../header/Header'
import MobileHeader from '../header/Mobileheader/MobileHeader'
function LayoutHeader({ setdark, dark }) {

    return (
        <>
            <div className='headertopsection'>
                <div className={`d-none d-lg-block`}>
                    <Header setdark={setdark} dark={dark} />
                </div>
                <div className={`d-block d-lg-none`}>
                    <MobileHeader setdark={setdark} dark={dark} />
                </div>
            </div>

        </>
    )
}

export default LayoutHeader