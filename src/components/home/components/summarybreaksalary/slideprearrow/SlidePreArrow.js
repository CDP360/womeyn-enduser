import React from 'react';
import styles from './styles/SlidePreArrow.module.scss';
function SlidePreArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={styles.summartpre}
      style={{

      }}
      onClick={onClick}
    />
  );
}

export default SlidePreArrow;