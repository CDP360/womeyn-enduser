import React from 'react';
import styles from './styles/SlidePreArrow.module.scss';
function SlidePreArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={styles.slideprecarouselwomen}
      onClick={onClick}
    >
      <ion-icon name="chevron-back-outline"></ion-icon>
    </div>
  );
}

export default SlidePreArrow;