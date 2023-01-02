import React, { Fragment } from 'react'
import Layout from '../../../../pages/layout'
import LayoutHeader from '../../Layoutheader/LayoutHeader';
import styles from './styles/Explore.module.scss';
function Explore({dark,setdark}) {
    return (
        <Fragment>
            <div className={styles.mainexploresection}>
               <LayoutHeader setdark={setdark} dark={dark}/>
            </div>
        </Fragment>
    )
}

export default Explore  