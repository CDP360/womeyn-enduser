import React from 'react';
import styles from './styles/SlideNextArrow.module.scss'

function SlideNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={styles.slidenext}

            style={{

            }}

            onClick={onClick}
        />
    );
}

export default SlideNextArrow;