import React, { Fragment, useState } from 'react'
import styles from './styles/Category.module.scss';

import { useRouter } from 'next/router';

import Select from 'react-select';
import serachicon from '../../../../assests/homepage-logos/serachicon.png';
import Seacrhsidebarcatgory from './components/serachsidebarcategory/Seacrhsidebarcatgory';
import Maincategorysearch from './components/maincategorysearch/Maincategorysearch';
import Categorycarouse from '../../categoryslidecarousel/Categorycarouse';


function CategorycardQueryparams() {

  const history = useRouter();


  const queryname = history.query.search;


  return (
    <div className={styles.maincategorysection}>
      <div className={styles.emptyboxleft}>
      </div>
      <div className={styles.emptyboxright}>
      </div>
      <div className={styles.insidecategorysection}>
        <div className='mb-3 mt-2'>
          Categorys / health {queryname}
        </div>

        <div>
          <Categorycarouse />
        </div>
        {/* <div className={styles.mainselectbox}>
            <div className={styles.selectboxfilter}>
              <div>
                <div className={styles.serachwomenpresection}>
                  <div>
                    <input type='text' placeholder="Search by Name or Brand" className={styles.inputtypesection} name="search" value={searchname} onChange={(e) => SearchNameBrand(e)} />
                  </div>
                  <div>
                    <Image src={serachicon} alt="no image" className={styles.serachiconwomen} onClick={GetSearchdata} />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-10 col-md-6 col-xs-12">
                <Select
                  value={selectname}
                  defaultValue={{ label: "Select Dept", value: 0 }}
                  onChange={handleChange}
                  options={options}
                />
              </div>
            </div>
          </div> */}
        <div className={styles.splitcategorysection}>
          <div className={styles.leftcatgory}>
            <Seacrhsidebarcatgory />
          </div>
          <div className={styles.rightcategory}>
            <Maincategorysearch name={queryname}
            // searchnamevalue={searchnamevalue}
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default CategorycardQueryparams;