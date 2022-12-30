import React from 'react'
import Header from '../../src/components/header/Header'
import MobileHeader from '../../src/components/header/Mobileheader/MobileHeader'


function index({ children }) {
    return (
        <>
            <div className='headertopsection'>
                <div className={`d-none d-lg-block`}>
                    <Header />
                </div>
                <div className={`d-block d-lg-none`}>
                    <MobileHeader />
                </div>
            </div>
            <main>
                {children}
            </main>
        </>
    )
}

export default index