import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Aboutus from '../../src/components/middleheaderchilderns/abouts/Aboutus'




function index() {
    return (
        <LayoutHeader  title="Aboutus">
            <meta
          name="description"
          content="Meta description for the About page"
        />
            <Aboutus />
        </LayoutHeader>
    
    )
}

export default index