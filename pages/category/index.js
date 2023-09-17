import React from 'react'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';
import CategorycardQueryparams from '../../src/components/categorys/maincategoryproducts/categorycardqueryparams/CategorycardQueryparams';

function index() {
    return (
        <LayoutHeader title={"ProductSearch"}>
            <CategorycardQueryparams />
        </LayoutHeader>
    )
}

export default index