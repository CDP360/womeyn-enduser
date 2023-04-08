import React, { useEffect, useState } from "react";
import styles from "./styles/Favorts.module.scss";
import Star from '../../../../assests/category-logos/greenStar.png'
import HalfStar from '../../../../assests/category-logos/greenHalfStar.png'
import Search from '../../../../assests/homepage-logos/serachicon.png'
import Delete from '../../../../assests/category-logos/deleteIcon.png'
import Image from "next/image";
import { GetFavoritsList, ProductLikeWishlistRemove } from "../../../../services/user-favorits-service/User-favorits-service";
import Skeleton from 'react-loading-skeleton';
import LoaderLogo from './../../../loaderlogo/LoaderLogo';
import { Rate } from "antd";
import { useRouter } from 'next/router';
import Modal from 'react-bootstrap/Modal';
function Favorts() {
  const [show, setShow] = useState(false);
  const [deleteid, setDeleteid] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true)
    setDeleteid(id);
  };

  const history = useRouter();
  const [favorts, setFavorts] = useState([]);
  const [starcount, setStarCount] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    const userToken=localStorage.getItem("userToken");
    if(JSON.parse(userToken))
    {
      GetFavoritsList().then((res) => {
        setTimeout(() => {
          setLoading(false);
          setFavorts(res?.data[0]?.results);
        }, 400)
      }).catch((err) => {
        console.log(err);
      })
    }
    else
    {
      history.push("/login")
    }
 
  }, [starcount, deleteid])
  const pushProductPage = (data) => {
    history.push(`/product/${data}`)
  }

  const handleDelete = () => {
    const datasremove = {
      wishlistId: deleteid
    }
    ProductLikeWishlistRemove(datasremove).then((res) => {
      setTimeout(() => {
        handleClose();
        window.location.reload();
      }, 500);
    }).catch((err) => {
      console.log(err);
    })

  }

  return (
    <>
      <div>
        <div className={styles.favortsInputContainer}>
          <input className={styles.favortsSearch}
            placeholder="Search your favorites" />
          <Image src={Search} className={styles.searchImg} />
        </div>
        <div className={styles.favortsContainer}>
          <p className={styles.favortsText}>Favorites</p>



          <div>
            {loading ? <>


              <LoaderLogo />

            </> : <>

            
              {
                favorts.map((data, index) =>
                  <div className={styles.favortsInnerContainer} key={index}>
                    <div className={styles.favortsLeftContainer} onClick={() => pushProductPage(data.productSlugName)}>
                     <div className={styles.boximage}>

                     {data?.productThumbImage ? <>
                        <img
                          className={styles.favortsImg}
                          src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${data?.productThumbImage}`}
                          alt="profile-pic"
                        />
                      </> : <>
                        <Skeleton className={styles.favortsImg} />
                      </>}
                      </div>
                      <div className={styles.favortsContentContainer}>
                        <p className={styles.favortsProductName}>{data.productName}</p>
                        {/* <p className={styles.favortsOfferDetail}>{data.productSlugName}</p> */}
                        <div className={styles.favortsRatingContainer}>
                         
                          {/* <Rate defaultValue={3.5} allowHalf style={{ color: "#54BE43" }}
                            tooltips={["Bad", "Normal", "Average", "Good", "Very Good"]}
                            onChange={(value) => {
                              setStarCount(value)

                            }}
                            disabled
                          /> */}
                          {/* </div> */}

                          {data?.salePrice}

                        </div>
                      </div>
                    </div>
                    <div className={styles.favortsRightContainer} onClick={() => handleShow(data?._id)}>
                      <Image src={Delete} className={styles.removeitems} />
                      <div className='d-none d-lg-block'>
                        <p className={styles.favortsDeleteText}>Remove</p>
                      </div>
                    </div>
                  </div>
                )
              }
            </>}


            {favorts?.length === 0 && <div>No Favorites Data</div>}


          </div>


        </div>
      </div>
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >

          <Modal.Body>
            <div className={styles.modelremove}>

              <div className={styles.insidemodelpopup}>
                <div className={styles.removetexts}>
                  Remove Item
                </div>
                <div onClick={handleClose}>
                  <ion-icon name="close-outline" size="large"></ion-icon>
                </div>
              </div>
              <div className={styles.removeitemname}>
                Are you sure want to remove this item from your Wish List?
              </div>
              <div className={styles.buttonsections}>
                <button className={styles.buttonscancel} onClick={handleClose}>Cancel</button>
                <button className={styles.buttonsremove} onClick={() => handleDelete(deleteid)}>Remove</button>
              </div>
            </div>
          </Modal.Body>

        </Modal>
      </>
    </>
  );
}

export default Favorts;
