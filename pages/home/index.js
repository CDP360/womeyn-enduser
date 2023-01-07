import React from 'react'
import Home from '../../src/components/home/Home'
function index({ dark, setdark }) {
    return (
        <div>
            <Home dark={dark} setdark={setdark} />
        </div>
    )
}

export default index