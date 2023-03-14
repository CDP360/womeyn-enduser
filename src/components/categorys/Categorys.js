import React, { Fragment, useState } from 'react'
import styles from './styles/Category.module.scss';
import categorylogo from '../../assests/category-logos/categorybanner.png';
import Image from 'next/image';
import Sidebarcateogrys from './sidebarcategory/Sidebarcateogrys';
import Maincategorylist from './maincategoryproducts/Maincategorylist';
import { useEffect } from 'react';
import Categorycarouse from './categoryslidecarousel/Categorycarouse';
import Select from 'react-select';
import serachicon from '../../assests/homepage-logos/serachicon.png';

function Categorys({id}) {
  const [selectname, selectedOption] = useState(null);
  const [searchname, setSearchName] = useState('');

  const values=id;

  useEffect(() => {
  }, [values])
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const handleChange = (data) => {
    selectedOption(data);
  };

  const SearchNameBrand = (e) => {
    setSearchName(e.target.value);

}

const GetSearchdata=()=>{
  console.log("Search here!!!!");
}
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
            <Categorycarouse />
          </div>
          <div className={styles.mainselectbox}>
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
          </div>
          <div className={styles.splitcategorysection}>
            <div className={styles.leftcatgory}>
              <Sidebarcateogrys />
            </div>
            <div className={styles.rightcategory}>
              <Maincategorylist name={values}/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Categorys