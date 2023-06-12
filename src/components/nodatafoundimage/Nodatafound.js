
import Image from 'next/image';
import gt from '../../assests/womeynlogos/nodatafound.jpg';
import styles from './styles/Nodatafound.module.scss';
export function Nodatafoundimage({ title }) {
    return (
        <div className={styles.nodatafoundimagesection}>
           <div>
           <Image src={gt} alt="no image" className={styles.noimages}/>
            </div>
            <div className={styles.titlereview}>
                {title}
            </div>
        </div>
    )
}