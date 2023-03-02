import React from 'react';
import styles from './styles/SlidePreArrow.module.scss';
function SlidePreArrowcategory(props) {
  const { onClick } = props;
  return (
    <div
      className="slideprecarousels"
      onClick={onClick}
    >
      <ion-icon name="chevron-back-outline"></ion-icon>
    </div>
  );
}

export default SlidePreArrowcategory;