import React from 'react'
import LayoutHeader from '../../../src/components/Layoutheader/LayoutHeader';
import Eventsupdate from './../../../src/components/middleheaderchilderns/eventsupdate/Eventsupdate';



function index({dark,setdark}) {
    return (
        <LayoutHeader setdark={setdark} dark={dark} title="Events">
           <Eventsupdate />
        </LayoutHeader>
    )
}

export default index