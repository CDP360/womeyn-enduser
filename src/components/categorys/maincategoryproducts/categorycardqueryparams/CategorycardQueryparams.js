import React, { Fragment, useState,useEffect } from 'react'
import styles from './styles/Category.module.scss';

import { useRouter } from 'next/router';

import Select from 'react-select';
import serachicon from '../../../../assests/homepage-logos/serachicon.png';
import Seacrhsidebarcatgory from './components/serachsidebarcategory/Seacrhsidebarcatgory';
import Maincategorysearch from './components/maincategorysearch/Maincategorysearch';
import Categorycarouse from '../../categoryslidecarousel/Categorycarouse';


// function CategorycardQueryparams() {

//   const history = useRouter();


//   const queryname = history.query.search;


//   return (
//     <div className={styles.maincategorysection}>
//       <div className={styles.emptyboxleft}>
//       </div>
//       <div className={styles.emptyboxright}>
//       </div>
//       <div className={styles.insidecategorysection}>
//         <div className='mb-3 mt-2'>
//           Categorys / health {queryname}
//         </div>

//         <div>
//           <Categorycarouse />
//         </div>
//         {/* <div className={styles.mainselectbox}>
//             <div className={styles.selectboxfilter}>
//               <div>
//                 <div className={styles.serachwomenpresection}>
//                   <div>
//                     <input type='text' placeholder="Search by Name or Brand" className={styles.inputtypesection} name="search" value={searchname} onChange={(e) => SearchNameBrand(e)} />
//                   </div>
//                   <div>
//                     <Image src={serachicon} alt="no image" className={styles.serachiconwomen} onClick={GetSearchdata} />
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-4 col-sm-10 col-md-6 col-xs-12">
//                 <Select
//                   value={selectname}
//                   defaultValue={{ label: "Select Dept", value: 0 }}
//                   onChange={handleChange}
//                   options={options}
//                 />
//               </div>
//             </div>
//           </div> */}
//         <div className={styles.splitcategorysection}>
//           <div className={styles.leftcatgory}>
//             <Seacrhsidebarcatgory />
//           </div>
//           <div className={styles.rightcategory}>
//             <Maincategorysearch name={queryname}
//             // searchnamevalue={searchnamevalue}
//             />
//           </div>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default CategorycardQueryparams;






function CategorycardQueryparams({ id }) {
  const [selectname, selectedOption] = useState(null);
  const [searchname, setSearchName] = useState('');
  const [searchnamevalue, setSearchNameValue] = useState('');

  const [filterproducts,setFilterproducts]=useState([]);

  const [loadingproduct,setLoadingproduct]=useState(false);
  const [productgetloading,setProductgetloading]=useState(false);


  const router=useRouter();



  const values = router.query.search;

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
  const GetSearchdata = () => {
    setSearchNameValue(searchname);
  }

  useEffect(() => {
  }, [searchname, searchnamevalue,filterproducts,productgetloading])

  return (
    <Fragment>
      <div className={styles.maincategorysection}>
        <div className={styles.emptyboxleft}>
        </div>
        <div className={styles.emptyboxright}>
        </div>
        <div className={styles.insidecategorysection}>
          <div className='mb-3 mt-2'>
            Categorys / health {id}
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
              <Seacrhsidebarcatgory setFilterproducts={setFilterproducts} setLoadingproduct={setLoadingproduct} setProductgetloading={setProductgetloading}/>
            </div>
            <div className={styles.rightcategory}>
              <Maincategorysearch name={values} searchnamevalue={searchnamevalue} filterproducts={filterproducts} setFilterproducts={setFilterproducts} setLoadingproduct={setLoadingproduct} loadingproduct={loadingproduct}
              setProductgetloading={setProductgetloading}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CategorycardQueryparams