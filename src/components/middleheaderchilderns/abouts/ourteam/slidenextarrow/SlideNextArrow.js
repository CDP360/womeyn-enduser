import React from 'react';
import styles from './styles/SlideNextArrow.module.scss'

function SlideNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={styles.slidenextcarousels}
            onClick={onClick}
        >
       <ion-icon name="arrow-forward-outline"></ion-icon>
     
         </div>
    );
}

export default SlideNextArrow;