import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import CategorycardQueryparams from '../../src/components/serviceCategoriesscreen/maincategoryproducts/categorycardqueryparams/CategorycardQueryparams'

function index() {
    return (
        <LayoutHeader title={"ServiceSearch"}>
           <CategorycardQueryparams/>
        </LayoutHeader>
    )
}

export default index