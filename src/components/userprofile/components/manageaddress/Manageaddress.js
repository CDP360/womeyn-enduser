import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import searchcion from '../../../../assests/homepage-logos/serachicon.png';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";
import styles from './styles/Mangeaddress.module.scss';
import address from '../../../../assests/profile-logo/addressempty.png';
import { Addaddress, GetAddressData } from '../../../../services/user-profile-service/user-profile-services';
import maplocation from '../../../../assests/profile-logo/maplocation.png'
function Manageaddress() {
  const [getaddress, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    getAddressdata();

  }, []);

  const getAddressdata = () => {
    setLoading(true);
    GetAddressData().then((res) => {
      setAddress(res?.data?.results);
      setTimeout(() => {
        setLoading(false);
      }, 500)
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className={styles.mainaddresspage}>
      <div className={styles.insideaddresspage}>


        {getaddress?.length > 0 ? <>
          <div className={styles.topsectionaddress}>
            <div className={styles.leftaddresssection}>
              {/* <input type="text" placeholder='Search address or receiver name' className={styles.serachaddress} />
                        <div>
                            <Image src={searchcion} alt="no image" className={styles.searchicon} />
                        </div> */}
              Manage Address
            </div>
            <div className={styles.rightaddresssection}>
              <div>
                <button className={styles.addbuttonnew} >Add new address</button>
              </div>
            </div>
          </div>
          <div>

            {loading ? <>
              {/* <Loader */}
              loading...
            </> : <>

              {getaddress?.map((item, index) => {
                return (
                  <>

                    <div className={styles.addresslistsection} key={index}>
                      <div className={styles.addresssplit}>
                        <div className={styles.leftaddress}>

                          <Image src={maplocation} alt="no image" className={styles.map} />
                        </div>

                        <div className={styles.rightaddress}>
                          {/* <div>
                                                <button className={styles.editbuttonaddress}>Edit</button>

                                            </div>
                                            <div>
                                                <button className={styles.deletebuttonaddress}>Delete</button>

                                            </div> */}



                          <div>
                            {item?.name}
                          </div>
                          <div>
                            {item?.contactNumber}
                          </div>
                          <div>
                            {item?.stateName}
                          </div>
                          <div>
                            {item?.cityName}
                          </div>
                          <div>
                            {item?.fullAddress}
                          </div>

                        </div>
                      </div>

                    </div>

                  </>
                )
              })}

            </>}
          </div>
        </> : <div>
          <div>
            Manage Address

          </div>

          <Image src={address} alt="no image" className={styles.notlocation} />

          <div className="text-center mt-3 mb-4">
            Please add a delivery address here
          </div>
          <div>
            <div className={styles.rightaddresssection}>
              <div>
                <button className={styles.addbuttonnew} >Add new address</button>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </div>

  )
}

export default Manageaddress