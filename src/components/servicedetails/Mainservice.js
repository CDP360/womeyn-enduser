import React from 'react'
import styles from './styles/Mainservice.module.scss';
import Servicebooking from './components/servicebooking/Servicebooking';
function Mainservice() {
    return (
        <div className='mainsection'>
          <div className="insidesection">
<Servicebooking/>
            </div>
        </div>
)
}

export default Mainservice