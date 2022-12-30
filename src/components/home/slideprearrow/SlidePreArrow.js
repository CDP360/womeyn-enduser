import React from 'react';
import styles from './styles/SlidePreArrow.module.scss';
function SlidePreArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={styles.slidepre}
      onClick={onClick}
    />
  );
}

export default SlidePreArrow;