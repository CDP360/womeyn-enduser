import React from 'react'
import Home from '../../src/components/home/Home'


function index({ setthemes, womeyntheme }) {
    return (
        <div>
            <Home setthemes={setthemes} womeyntheme={womeyntheme} />
        </div>
    )
}

export default index