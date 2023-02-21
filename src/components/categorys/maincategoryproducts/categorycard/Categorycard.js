import Image from 'next/image';
import React,{useContext} from 'react'
import styles from './styles/Categorycard.module.scss';
import stars from '../../../../assests/homepage-logos/stars.png';
import plus from '../../../../assests/womeynlogos/plus.png';
import { ContextStore } from '../../../../Redux/store/Contextstore';
function Categorycard({ item }) {
    const {state,dispatch}=useContext(ContextStore)

    
    const Carthandleproduct = (data) => {
        dispatch({type:"CART_SUCCESS",payload:data});
    }
    return (
        <div className={styles.cards}>
            {/* {item.title} */}
            <div className={styles.plussection}>
                <Image src={plus} alt="no image" className={styles.plus} onClick={() => Carthandleproduct(item)} />
            </div>
            <img src={item.image.src} alt="no image" className={styles.categoryimage} />
            <div className={styles.cardinsidesection}>
                <Image src={stars} alt="no image" className={styles.stars} />
                {/* <div>
                    <span>{item?.title.slice(0, 16)}</span>
                </div> */}
                <div>
                    <span className='textgrey'>{item?.name}</span>
                </div>
                <div className={styles.cardsellerborder}>
                    <div className={styles.cardsellerinsideborder}>

                    </div>
                </div>
                <div className={styles.cardpricesection}>
                    <div className='textprice'>
                        <span>${200 - 15}</span>
                    </div>
                    <div className='textpricedashed'>
                        <del>${78}</del>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categorycard