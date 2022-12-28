import React from 'react'
import Home from '../../src/components/home/Home'


function index({ womeyntheme, setWomeynTheme }) {
    console.log("kalai", womeyntheme);
    return (
        <div>
            <Home womeyntheme={womeyntheme} setWomeynTheme={setWomeynTheme} />
        </div>
    )
}

export default index