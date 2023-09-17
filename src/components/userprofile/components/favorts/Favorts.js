import React, { useEffect, useState } from "react";
import styles from "./styles/Favorts.module.scss";
import Star from '../../../../assests/category-logos/greenStar.png'
import HalfStar from '../../../../assests/category-logos/greenHalfStar.png'
import Search from '../../../../assests/homepage-logos/serachicon.png'
import Delete from '../../../../assests/category-logos/deleteIcon.png'
import Image from "next/image";
import { GetFavoritsList, ProductLikeWishlistRemove,GetFavoritsListPagination } from "../../../../services/user-favorits-service/User-favorits-service";
import Skeleton from 'react-loading-skeleton';
import LoaderLogo from './../../../loaderlogo/LoaderLogo';
import { Rate } from "antd";
import { useRouter } from 'next/router';
import Modal from 'react-bootstrap/Modal';
import ReactPaginate from 'react-paginate';
import { Nodatafoundimage } from './../../../nodatafoundimage/Nodatafound';
function Favorts({ error }) {
  const [show, setShow] = useState(false);
  const [deleteid, setDeleteid] = useState("");
  const [showTopBtn, setShowTopBtn] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true)
    setDeleteid(id);
  };
  const history = useRouter();
  const [favorts, setFavorts] = useState([]);
  const [starcount, setStarCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagecount, setPagecount] = useState("");
  const [pagecountnumbers, setPagecountNumbers] = useState(1);
  const [pagecountcheck, setPagecountCheck] = useState("");
  useEffect(() => {
    setLoading(true);
    const userToken = localStorage.getItem("userToken");
    if (JSON.parse(userToken)) {
      GetFavoritsList().then((res) => {
        setTimeout(() => {
          setLoading(false);
          setFavorts(res?.data[0]?.results);
          setPagecount(res?.data[0]?.totalCount[0]?.count)

  

        }, 400)
      }).catch((err) => {
        console.log(err);
      })
    }
    else {
      history.push("/login")
    }

    if (error) {
      localStorage.removeItem("userid");
      localStorage.removeItem("userToken");
      localStorage.removeItem("whish");
      localStorage.removeItem("user");
      localStorage.removeItem("auth");
      localStorage.removeItem("productid");
      localStorage.removeItem('signupuser');

      history.push("/login");
    }

  }, [starcount, deleteid, error])
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


  const fetchComments = async (current) => {
    const res = await GetFavoritsListPagination(current);
    return res?.data[0]?.results;
}




const handlePageClick = async (data) => {
    let current = data?.selected + 1;
    setPagecountNumbers(current);
    const commentForms = await fetchComments(current);
    goToTop()
    setFavorts(commentForms);
  

}

useEffect(() => {
  window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
          setShowTopBtn(true);
      } else {
          setShowTopBtn(false);
      }
  });
}, []);

const goToTop = () => {
    window.scrollTo({
        top: 500,
        behavior: "smooth",
    });
};



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



{favorts?.length==0 && <div>
  <Nodatafoundimage
  title={"No Favorites"}
  />
  </div>}

          <div className="row d-flex gap-3">

            {favorts?.map((data, index) => {
              return (
                <div className={styles.cartbox}>
                  <div className={styles.splitfavorts}>

                    <div className={styles.leftfavorts}>

                      {data?.productThumbImage ? <div onClick={() => pushProductPage(data.productSlugName)}>
                        <img
                          className={styles.favortsImg}
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${data?.productThumbImage}`}
                          alt="profile-pic"
                        />
                      </div> : <>
                        <Skeleton className={styles.favortsImg} />
                      </>}
                    </div>
                    <div className={styles.rightfavortscontent}>
                      <div>
                        {/* {data.productName.slice(0,22)} */}
                        {data?.productName > 10 ? <>{data?.productName}</> : <>{data?.productName.slice(0, 22)}</>}
                      </div>

                      <div className={styles.carticonsection}>

                        <div className={styles.boxicons} onClick={() => pushProductPage(data.productSlugName)}>
                          {/* <Image src={Delete} className={styles.removeitems} /> */}

                          {/* <ion-icon name="cart-outline" size="large"></ion-icon> */}
                          <ion-icon name="eye-outline"></ion-icon>

                        </div>

                        <div className={styles.boxicons} onClick={() => handleShow(data?._id)}>
                          {/* <Image src={Delete} className={styles.removeitems} /> */}
                          <ion-icon name="trash-outline"></ion-icon>


                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>


          {/* {pagecount === 0 ? null : <>
                                <div className="mt-3">
                                    <hr />
                                </div>
                                <div>

                                    Page {pagecountnumbers} / {pagecount}
                                </div>

                                <div className="mt-3">

                                    <ReactPaginate
                                        activeClassName={'actives '}
                                        breakClassName={'item break-me '}
                                        breakLabel={'...'}
                                        containerClassName={'pagination'}
                                        disabledClassName={'disabled-page'}
                                        marginPagesDisplayed={2}
                                        nextClassName={"item next "}
                                        nextLabel={Math.ceil(pagecount / 12) === pagecountnumbers ? null : "NEXT"}
                                        onPageChange={handlePageClick}
                                        pageCount={pagecount / 12}
                                        pageClassName={'item pagination-page '}
                                        pageRangeDisplayed={2}
                                        previousClassName={"item previous"}
                                        previousLabel={pagecountnumbers > 1 ? "PREVIOUS" : null}



                                    />
                                </div>
                            </>} */}


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
