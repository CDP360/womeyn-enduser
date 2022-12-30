import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Getwomencount from '../../../../../Redux/actions/WomenslidecountAction';
import styles from './styles/SlideNextArrow.module.scss'

function SlideNextArrow(props) {
    const { onClick } = props;
    const testcount = props?.currentSlide + 1;
    console.log(props.currentSlide, "thala");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Getwomencount(testcount))
    }, [testcount])
    return (
        <>
            <div
                className={styles.slidenextcarouselwomeyn}
                onClick={onClick}
            />
        </>
    );
}

export default SlideNextArrow;
