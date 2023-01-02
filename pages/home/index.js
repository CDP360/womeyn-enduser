import React from 'react'
import Home from '../../src/components/home/Home'


function index({ womeyntheme, setWomeynTheme }) {

    return (
        <div>

            <Home womeyntheme={womeyntheme} setWomeynTheme={setWomeynTheme} />
        </div>
    )
}

export default index