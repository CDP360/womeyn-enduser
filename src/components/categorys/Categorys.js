import React, { Fragment } from 'react'
import styles from './styles/Category.module.scss';
import categorylogo from '../../assests/category-logos/categorybanner.png';
import Image from 'next/image';
import Sidebarcateogrys from './sidebarcategory/Sidebarcateogrys';
import Maincategorylist from './maincategoryproducts/Maincategorylist';

function Categorys() {
  return (
    <Fragment>
      <div className={styles.maincategorysection}>
        <div className={styles.emptyboxleft}>

        </div>
        <div className={styles.emptyboxright}>

        </div>
        <div className={styles.insidecategorysection}>
          <div className='mb-3 mt-2'>
            Categorys / health
          </div>
          <div>
            <Image src={categorylogo} alt="no image" className={styles.bannercategoryimage} />
          </div>
          <div className={styles.splitcategorysection}>
            <div className={styles.leftcatgory}>
              <Sidebarcateogrys />
            </div>
            <div className={styles.rightcategory}>
              <Maincategorylist />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Categorys