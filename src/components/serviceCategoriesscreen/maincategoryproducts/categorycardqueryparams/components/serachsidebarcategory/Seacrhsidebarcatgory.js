// import React, { useState, useEffect } from 'react'
// import styles from './styles/Sidebarcategory.module.scss';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'react-bootstrap/Form';
// import { Slider, Switch } from 'antd';
// function Seacrhsidebarcatgory() {


//     const [dropdown1, setDropdown1] = useState(true);
//     const [dropdown2, setDropdown2] = useState(true);
//     const [dropdown3, setDropdown3] = useState(true);
//     const [first, setFirst] = useState(null);
//     const [first1, setFirst1] = useState(null);


//     const onChange = (value) => {
//         // console.log('onChange: ', value);
//         setFirst(value);
//     }

//     const onAfterChange = (value) => {
//         // console.log('onAfterChange: ', value);
//         setFirst1(value);
//     }

//     useEffect(() => {

//     }, [first, first1])
//     return (
//         <div className={styles.mainsidebarsectioncategory}>
//             <div className={styles.filtersectiontext}>
//                 <div className={styles.splitfiltertext}>
//                     <div className={styles.leftfilter}>
//                         <div className={styles.filterbytext}>
//                             Filter by
//                         </div>
//                         {/* <div>
//               4 applied.
//             </div> */}
//                     </div>
//                     {/* <div className={styles.rightfilter}>
//             Clear all
//           </div> */}
//                 </div>
//             </div>
//             <div className='mt-2'>
//                 <div className={styles.bordertopsection}>
//                 </div>
//             </div>
//             {/* <div>
//         <div className={styles.dropdownsection} 
//         // onClick={() => {
//         //   setDropdown1(false)
//         //   setDropdown2(!dropdown2)
//         //   setDropdown3(false)
//         // }}
//         >
//           <div className={styles.transactionsize}>
//             Product / Service
//           </div>
//           {dropdown2 ? <ion-icon name="chevron-up-outline" className="ion-icon" onClick={() => setDropdown2(!dropdown2)}></ion-icon> : <ion-icon name="chevron-down-outline" className="ion-icon" onClick={() => setDropdown2(!dropdown2)}></ion-icon>}
//         </div>
//         {dropdown2 && <div className={styles.gapsectiondropdown}>
//           <div><Form.Check type="checkbox" label="All products" /></div>
//           <div><Form.Check type="checkbox" label="All services" /></div>
//         </div>}
//       </div> */}
//             {/* <div>
//         <div className='mt-4 mb-2'>
//           <div className={styles.bordertopsection}>
//           </div>
//         </div>
//       </div> */}
//             <div>
//                 <div className={styles.dropdownsection}
//                 //  onClick={() => {
//                 //   setDropdown1(!dropdown1)
//                 //   setDropdown2(false)
//                 //   setDropdown3(false)
//                 // }}
//                 >
//                     <div className={styles.transactionsize}>
//                         Categories
//                     </div>
//                     {dropdown1 ? <ion-icon name="chevron-up-outline" className="ion-icon" onClick={() => setDropdown1(!dropdown1)}></ion-icon> : <ion-icon name="chevron-down-outline" className="ion-icon" onClick={() => setDropdown1(!dropdown1)}></ion-icon>}
//                 </div>
//                 {dropdown1 && <div className={styles.gapsectiondropdown}>
//                     <div><Form.Check type="checkbox" label="All products" /></div>
//                     <div><Form.Check type="checkbox" label="Apparel" /></div>
//                     <div><Form.Check type="checkbox" label="Sport equipment" /></div>
//                     <div><Form.Check type="checkbox" label="Accessories" /></div>
//                     <div><Form.Check type="checkbox" label="Service & Subscription" /></div>
//                 </div>}
//             </div>

//             <div>
//                 <div className='mt-4 mb-2'>
//                     <div className={styles.bordertopsection}>
//                     </div>
//                 </div>
//             </div>

//             <div>
//                 <div className={styles.dropdownsection}
//                 //  onClick={() => {
//                 //   setDropdown1(false)
//                 //   setDropdown2(false)
//                 //   setDropdown3(!dropdown3)
//                 // }}
//                 >
//                     <div className={styles.transactionsize}>
//                         Price
//                     </div>
//                     {dropdown3 ? <ion-icon name="chevron-up-outline" className="ion-icon" onClick={() => setDropdown3(!dropdown3)}></ion-icon> : <ion-icon name="chevron-down-outline" className="ion-icon" onClick={() => setDropdown3(!dropdown3)}></ion-icon>}
//                 </div>
//                 {dropdown3 && <div className={styles.gapsectiondropdown}>
//                     {/* <div><Form.Check type="checkbox" label="Under $100" /></div>
//           <div><Form.Check type="checkbox" label="$100 - $200" /></div>
//           <div><Form.Check type="checkbox" label="$200 - $300" /></div>
//           <div><Form.Check type="checkbox" label="$300 - $400" /></div>
//           <div><Form.Check type="checkbox" label="$400 above" /></div> */}

//                     <Slider range defaultValue={[first, first1]}
//                         className={styles.kalai}
//                         onChange={onChange} onAfterChange={onAfterChange}
//                     />
//                 </div>}
//             </div>
//         </div>
//     )
// }

// export default Seacrhsidebarcatgory;




import React, { useState, useEffect } from 'react'
import styles from './styles/Sidebarcategory.module.scss';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { Slider, Switch } from 'antd';
import { WomenpreneursCommoncategories } from '../../../../../../services/womenpreneurs-services/womenpreneurs-services';
import { CategoryproductFilter } from '../../../../../../services/category-services/category-service';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Seacrhsidebarcatgory({ setFilterproducts, setLoadingproduct, setProductgetloading }) {
  const [dropdown1, setDropdown1] = useState(true);
  const [dropdown2, setDropdown2] = useState(true);
  const [dropdown3, setDropdown3] = useState(true);
  const [first, setFirst] = useState("");
  const [first1, setFirst1] = useState("");
  const [commoncategorys, setCommonCategorys] = useState([]);
  const [categoryfilter, setCategoryfilters] = useState([]);
  const [filterproductprice1, setProductfilterprice1] = useState("");
  const [filterproductprice2, setProductfilterprice2] = useState("");

  const [filtercategorysearch, setFiltercategorysearch] = useState("");
  const [filtercategorysearch1, setFiltercategorysearch1] = useState("");


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const onChange = (value) => {
    setFirst(value);
  }
  const onAfterChange = (value) => {
    setFirst1(value);
  }
  useEffect(() => {
    // WomenpreneursCommoncategories
    WomenpreneursCommoncategories().then((res) => {
      setCommonCategorys(res?.data);
    }).catch((err) => {
      console.log(err);
    })

    setLoadingproduct(true);
    setProductgetloading(false);

    if (categoryfilter) {

      const price1=filterproductprice1;
      const price2=filterproductprice2;


      const datas = {
        categoryIds: categoryfilter.toString(),
        priceFrom:price1,
        priceTo: price2
      }

      CategoryproductFilter(datas).then((res) => {
        setFilterproducts(res?.data?.results);
        setProductgetloading(true); s
        setTimeout(() => {
          setLoadingproduct(false);
          setProductgetloading(false);
        }, 500)

      }).catch((err) => {
        console.log(err);
        setLoadingproduct(false);
      })
    }
  }, [categoryfilter,filterproductprice1,filterproductprice2]);

  const ClearFiltersall = () => {
    setLoadingproduct(true);
    setTimeout(() => {
      setLoadingproduct(false);
    }, 600)

    setCategoryfilters([]);

    window.location.reload(false);




  }





  const handleFilterCategorys = (e) => {
    const value = e?.target.value;
    const check = e?.target.checked;

    if (check) {
      setCategoryfilters([...categoryfilter, value]);
    }
    else {
      setCategoryfilters(categoryfilter.filter((e) => e != value));



    }
  }



  return (
    <div className={styles.mainsidebarsectioncategory}>
      <div className={styles.filtersectiontext}>
        <div className={styles.splitfiltertext}>
          <div className={styles.leftfilter}>
            <div className={styles.filterbytext}>
              Filter by
            </div>

          </div>
          <div className={styles.cleartexts} onClick={ClearFiltersall}>
            Clear All
          </div>
        </div>
      </div>
      <div className='mt-2'>
        <div className={styles.bordertopsection}>
        </div>
      </div>
      {/* <div>
        <div className={styles.dropdownsection} 
        // onClick={() => {
        //   setDropdown1(false)
        //   setDropdown2(!dropdown2)
        //   setDropdown3(false)
        // }}
        >
          <div className={styles.transactionsize}>
            Product / Service
          </div>
          {dropdown2 ? <ion-icon name="chevron-up-outline" className="ion-icon" onClick={() => setDropdown2(!dropdown2)}></ion-icon> : <ion-icon name="chevron-down-outline" className="ion-icon" onClick={() => setDropdown2(!dropdown2)}></ion-icon>}
        </div>
        {dropdown2 && <div className={styles.gapsectiondropdown}>
          <div><Form.Check type="checkbox" label="All products" /></div>
          <div><Form.Check type="checkbox" label="All services" /></div>
        </div>}
      </div> */}
      {/* <div>
        <div className='mt-4 mb-2'>
          <div className={styles.bordertopsection}>
          </div>
        </div>
      </div> */}
      <div>
        <div className={styles.dropdownsection}
        //  onClick={() => {
        //   setDropdown1(!dropdown1)
        //   setDropdown2(false)
        //   setDropdown3(false)
        // }}
        >
          <div className={styles.transactionsize}>
            Categories
          </div>
          {dropdown1 ? <ion-icon name="chevron-up-outline" className="ion-icon" onClick={() => setDropdown1(!dropdown1)}></ion-icon> : <ion-icon name="chevron-down-outline" className="ion-icon" onClick={() => setDropdown1(!dropdown1)}></ion-icon>}
        </div>
        {dropdown1 && <div className={styles.gapsectiondropdown}>

        <Form.Group controlId="formBasicEmail" className="col-lg-12 mb-3">
            <Form.Label>Search Category</Form.Label>
            <Form.Control type="search" placeholder="Enter Search Category..."
              name="categorysearch"
              value={filtercategorysearch1}
              onChange={(e) => setFiltercategorysearch1(e?.target?.value)} />
          </Form.Group>

          {filtercategorysearch1 ? <>
            {commoncategorys?.filter(user =>
              user?.name.toLowerCase().includes(filtercategorysearch1)).map((item, index) => {
                return (
                  // <div key={index}>
                  //   <Form.Check type="checkbox" label={item?.name} value={item?.id} onChange={handleFilterCategorys} />
                  // </div>

                  <div key={index} className={styles.cardfilters}>
                  <Form.Check type="checkbox" id={item?.name} value={item?.id} onChange={handleFilterCategorys}
                    className={styles.formselectcursor}
                  />
                  <label htmlFor={item?.name} className={styles.supportcursor}>
                    {item?.name}
                  </label>
                </div>
                )
              })}
          </> : <>
            {commoncategorys?.slice(0, 10).map((item, index) => {
              return (
                // <div key={index}>
                //   <Form.Check type="checkbox" label={item?.name} value={item?.id} onChange={handleFilterCategorys} />
                // </div>

                <div key={index} className={styles.cardfilters}>
                <Form.Check type="checkbox" id={item?.name} value={item?.id} onChange={handleFilterCategorys}
                  className={styles.formselectcursor}
                />
                <label htmlFor={item?.name} className={styles.supportcursor}>
                  {item?.name}
                </label>
              </div>
              )
            })}
          </>}
        </div>}
        {commoncategorys?.length > 10 && <div className={styles.readmorebutton} onClick={handleShow}>
          {commoncategorys?.length} Read More...
        </div>}
      </div>
      <div>
        <div className='mt-4 mb-2'>
          <div className={styles.bordertopsection}>
          </div>
        </div>
      </div>

      {/* <div>
        <div className={styles.dropdownsection}
    
        >
          <div className={styles.transactionsize}>
            Price
          </div>
          {dropdown3 ? <ion-icon name="chevron-up-outline" className="ion-icon" onClick={() => setDropdown3(!dropdown3)}></ion-icon> : <ion-icon name="chevron-down-outline" className="ion-icon" onClick={() => setDropdown3(!dropdown3)}></ion-icon>}
        </div>
        {dropdown3 && <div className={styles.gapsectiondropdown}>
          <div><Form.Check type="checkbox" label="Under $100" /></div>
          <div><Form.Check type="checkbox" label="$100 - $200" /></div>
          <div><Form.Check type="checkbox" label="$200 - $300" /></div>
          <div><Form.Check type="checkbox" label="$300 - $400" /></div>
          <div><Form.Check type="checkbox" label="$400 above" /></div>

          <Slider range defaultValue={[first, first1]}
            className={styles.filterprogress}
            onChange={onChange} onAfterChange={onAfterChange}
          />

          <div>


            <Row>
              <Col lg="5">
                <Form.Select aria-label="Default select example" name="pricefilterproduct" className={styles.pricefiltertextbox}
                  onChange={(e) => setProductfilterprice1(e?.target?.value)}
                  value={filterproductprice1}
                >
                 <option value="" default={""} diabled>Min</option>
                  <option value="10.00">A$10.00</option>
                  <option value="30.00">A$30.00</option>
                  <option value="90.00">A$90.00</option>
                  <option value="100.00">A$100.00</option>
                  <option value="150.00">A$150.00</option>
                  <option value="200.00">A$200.00</option>
                </Form.Select>
              </Col>
              <Col lg="1">
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <div className={styles.totext}>
                    to
                  </div>
                </div>
              </Col>
              <Col lg="5">
                <Form.Select aria-label="Default select example" name="pricefilterproduct" className={styles.pricefiltertextbox}
                  onChange={(e) => setProductfilterprice2(e?.target?.value)}
                  value={filterproductprice2}
                >
                  <option value="" default={""} diabled>A$2000.00+</option>
                  <option value="2000.00">A$2000.00</option>
                  <option value="1000.00">A$1000.00</option>
                  <option value="800.00">A$800.00</option>
                  <option value="500.00">A$500.00</option>
                  <option value="250.00">A$250.00</option>
                  <option value="150.00">A$150.00</option>
                  <option value="100.00">A$100.00</option>


                </Form.Select>
              </Col>
            </Row>


          </div>
        </div>}
      </div> */}

    

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className={styles.filtermodelshow}>
        <div className={"row d-flex gap-1"}>
        
        <div className="d-flex justify-content-between">

<div className="w-100">
  <Form.Group controlId="formBasicEmail" className="col-lg-12 mb-3">
    <Form.Label>Search Category</Form.Label>
    <Form.Control type="search" placeholder="Enter Search Category..."
      name="categorysearch"
      value={filtercategorysearch}
      onChange={(e) => setFiltercategorysearch(e?.target?.value)} />
  </Form.Group>
</div>
<div className="text-end d-flex justify-content-end  w-100 mt-2">
<div  className={"cursorpointers"} onClick={handleClose}>
<ion-icon name="close-outline" size="large"></ion-icon>
</div>
</div>
<hr />

</div>


{commoncategorys?.filter(user =>
              user?.name.toLowerCase().includes(filtercategorysearch)).map((item, index) => {
                return (
                  <div key={index} className={styles.cardfilters}>
                    <Form.Check type="checkbox" id={item?.name} value={item?.id} onChange={handleFilterCategorys}
                      className={styles.formselectcursor}
                    />
                    <label htmlFor={item?.name} className={styles.supportcursor}>
                      {item?.name}
                    </label>
                  </div>
                )
              })}
          
        </div>

        </Modal.Body>
        <Modal.Footer>
          <button  onClick={handleClose} className={styles.closefilter}>
            Close
          </button>
          <button className={styles.savefilters} onClick={handleClose}>
            Apply Filters
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Seacrhsidebarcatgory