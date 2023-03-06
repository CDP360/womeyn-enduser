import React from 'react'
import Getintouch from '../../src/components/getintouch/Getintouch'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'



function index() {
    return (
        <LayoutHeader title="Getintouch">
             <meta
          name="description"
          content="Meta description for the About page"
        />
         <Getintouch/>
        </LayoutHeader>
    

    )
}

export default index