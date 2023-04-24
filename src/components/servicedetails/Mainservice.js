import React from 'react'
import styles from './styles/Mainservice.module.scss';
import Servicebooking from './components/servicebooking/Servicebooking';
import Servicecards from './components/servicecards/Servicecards';
function Mainservice() {
    return (
        <>
            <div className={styles.mainservices}>

                <div className='mainsection'>
                    <div className="insidesection">
                        {/* <Servicebooking /> */}
                        <Servicecards />
                    </div>
                </div>


                
            </div>
            

               
            <div className={styles.emptyboxrightcolor}>
                </div>
                <div className={styles.emptyboxleftcolor}>
                </div>
        </>
    )
}

export default Mainservice