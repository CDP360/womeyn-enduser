import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Getwomencount from '../../../../../Redux/actions/slideraction/WomenslidecountAction';
import styles from './styles/SlideNextArrow.module.scss'

function SlideNextArrow(props) {
    const { onClick } = props;
    const womencount = props?.currentSlide + 1;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Getwomencount(womencount))
    }, [womencount])
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
