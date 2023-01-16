import React from 'react';
import styles from './styles/SlideNextArrow.module.scss'

function SlideNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={styles.summarynext}
            onClick={onClick}
        >
            <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
    );
}

export default SlideNextArrow;