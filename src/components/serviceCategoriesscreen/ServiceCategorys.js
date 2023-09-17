import React, { Fragment, useState } from 'react'
import styles from './styles/Category.module.scss';
import SidebarServicecateogrys from './sidebarcategory/SidebarServicecateogrys';
import Maincategorylist from './maincategoryproducts/Maincategorylist';
import { useEffect } from 'react';
import Categorycarouse from './categoryslidecarousel/Categorycarouse';
function ServiceCategorys({ id }) {
  const [selectname, selectedOption] = useState(null);
  const [searchname, setSearchName] = useState('');
  const [searchnamevalue, setSearchNameValue] = useState('');
  const [filterproducts, setFilterproducts] = useState([]);
  const [filterproducts1, setFilterproducts1] = useState([]);
  const [loadingproduct, setLoadingproduct] = useState(false);
  const [productgetloading, setProductgetloading] = useState(false);
  const values = id;
  const [pagecount, setPagecount] = useState("");
  const [pagecountnumbers, setPagecountNumbers] = useState(1);
  const [serviceCategoryshow, setServiceCategoryShow] = useState(false);
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
  }, [searchname, searchnamevalue, filterproducts, productgetloading])

  return (
    <Fragment>
      <div className="mainsection">
        <div className="insidesection">
          <div className={styles.maincategorysection}>
            <div className={styles.emptyboxleft}>
            </div>
            <div className={styles.emptyboxright}>
            </div>
            <div className={styles.insidecategorysection}>
              {/* <div className='mb-3 mt-2'>
                Categorys / health
              </div> */}

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
                  <SidebarServicecateogrys setFilterproducts={setFilterproducts}
                    setLoadingproduct={setLoadingproduct} setProductgetloading={setProductgetloading}
                    setPagecount={setPagecount}
                    pagecountnumbers={pagecountnumbers}
                    setFilterproducts1={setFilterproducts1}
                    setServiceCategoryShow={setServiceCategoryShow}
                    serviceCategoryshow={serviceCategoryshow}
                  />
                </div>
                <div className={styles.rightcategory}>
                  <Maincategorylist name={values} searchnamevalue={searchnamevalue} filterproducts={filterproducts} setFilterproducts={setFilterproducts} setLoadingproduct={setLoadingproduct} loadingproduct={loadingproduct}
                    setProductgetloading={setProductgetloading}
                    setPagecount={setPagecount}
                    pagecount={pagecount}
                    setPagecountNumbers={setPagecountNumbers}
                    pagecountnumbers={pagecountnumbers}
                    filterproducts1={filterproducts1}
                    serviceCategoryshow={serviceCategoryshow}

                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default ServiceCategorys;