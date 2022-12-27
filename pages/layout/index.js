import React from 'react'
import MiddleHeader from '../../src/components/header/components/middleheader/MiddleHeader'
import MobileHeader from '../../src/components/header/components/MobileHeader.js/MobileHeader'
import Header from '../../src/components/header/Header'

function index({ children }) {
    return (
        <div>
            <div className={`d-none d-lg-block`}>
                <Header />
                <MiddleHeader />
            </div>
            <div className={`d-block d-lg-none`}>
                <MobileHeader />
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default index