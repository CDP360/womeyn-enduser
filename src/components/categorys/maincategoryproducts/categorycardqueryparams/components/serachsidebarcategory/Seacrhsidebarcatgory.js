import React, { useState, useEffect } from 'react'
import styles from './styles/Sidebarcategory.module.scss';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Slider, Switch } from 'antd';
function Seacrhsidebarcatgory() {


    const [dropdown1, setDropdown1] = useState(true);
    const [dropdown2, setDropdown2] = useState(true);
    const [dropdown3, setDropdown3] = useState(true);
    const [first, setFirst] = useState(null);
    const [first1, setFirst1] = useState(null);


    const onChange = (value) => {
        // console.log('onChange: ', value);
        setFirst(value);
    }

    const onAfterChange = (value) => {
        // console.log('onAfterChange: ', value);
        setFirst1(value);
    }

    useEffect(() => {

    }, [first, first1])
    return (
        <div className={styles.mainsidebarsectioncategory}>
            <div className={styles.filtersectiontext}>
                <div className={styles.splitfiltertext}>
                    <div className={styles.leftfilter}>
                        <div className={styles.filterbytext}>
                            Filter by
                        </div>
                        {/* <div>
              4 applied.
            </div> */}
                    </div>
                    {/* <div className={styles.rightfilter}>
            Clear all
          </div> */}
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
                    <div><Form.Check type="checkbox" label="All products" /></div>
                    <div><Form.Check type="checkbox" label="Apparel" /></div>
                    <div><Form.Check type="checkbox" label="Sport equipment" /></div>
                    <div><Form.Check type="checkbox" label="Accessories" /></div>
                    <div><Form.Check type="checkbox" label="Service & Subscription" /></div>
                </div>}
            </div>

            <div>
                <div className='mt-4 mb-2'>
                    <div className={styles.bordertopsection}>
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.dropdownsection}
                //  onClick={() => {
                //   setDropdown1(false)
                //   setDropdown2(false)
                //   setDropdown3(!dropdown3)
                // }}
                >
                    <div className={styles.transactionsize}>
                        Price
                    </div>
                    {dropdown3 ? <ion-icon name="chevron-up-outline" className="ion-icon" onClick={() => setDropdown3(!dropdown3)}></ion-icon> : <ion-icon name="chevron-down-outline" className="ion-icon" onClick={() => setDropdown3(!dropdown3)}></ion-icon>}
                </div>
                {dropdown3 && <div className={styles.gapsectiondropdown}>
                    {/* <div><Form.Check type="checkbox" label="Under $100" /></div>
          <div><Form.Check type="checkbox" label="$100 - $200" /></div>
          <div><Form.Check type="checkbox" label="$200 - $300" /></div>
          <div><Form.Check type="checkbox" label="$300 - $400" /></div>
          <div><Form.Check type="checkbox" label="$400 above" /></div> */}

                    <Slider range defaultValue={[first, first1]}
                        className={styles.kalai}
                        onChange={onChange} onAfterChange={onAfterChange}
                    />
                </div>}
            </div>
        </div>
    )
}

export default Seacrhsidebarcatgory;