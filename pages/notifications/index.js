import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Notifications from '../../src/components/notifications/Notifications'

function index() {
    return (
        <LayoutHeader title="Notifications">
           
            <Notifications />
        </LayoutHeader>
    )
}

export default index