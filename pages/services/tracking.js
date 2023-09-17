import React from 'react'
import Servicetracking from '../../src/components/servicedetails/components/servicetracking/Servicetracking'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

function tracking() {
  return (
    <LayoutHeader title="service-tracking">
        <Servicetracking/>
    </LayoutHeader>
  )
}

export default tracking