import React from 'react'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';
import Privacypolicy from './../../src/components/privacypolicy/Privacypolicy';

function index() {
    return (
        <LayoutHeader title={"privacypolicy"}>
          <Privacypolicy/>
        </LayoutHeader>
    )
}

export default index