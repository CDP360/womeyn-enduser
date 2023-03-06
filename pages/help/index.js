import React from 'react'
import Help from '../../src/components/help/Help'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

function index() {
  return (
    <LayoutHeader title="Help">
       <meta
          name="description"
          content="Meta description for the About page"
        />
        <Help/>
    </LayoutHeader>
  )
}

export default index