import React from 'react'
import styles from './styles/Search.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import nodata from '../../../assests/login-logos/No data-amico.png';

import Spinner from 'react-bootstrap/Spinner';
import LoaderLogo from './../../loaderlogo/LoaderLogo';
function Searchbar({ serachdata, serachicon,searchDatacategory,loadingserah,serachcategory }) {
    const history = useRouter();
    const CategoryNavigatepath = (data) => {
        history.push(`/category/${data}`)
    }
    return (
        <div className={styles.mainserachbarsection}>
            <div className={styles.searchbarcontents}>

        
                {serachdata?.length>0? 
                <div className={styles.backgroundwhites}>
                    {serachdata?.map((item, index) => {
                        return (
                            <div>
                                <div className={styles.serachboxtexts} onClick={() => CategoryNavigatepath(item?.slugName)}>
                                    <div>
                                        {item?.imageName ? <>
                                            <img
                                                className={styles.serachshoeimages}
                                                src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.imageName}`}
                                                alt="profile-pic"
                                            />
                                        </> : < div className={styles.cursorserach}>
                                            <Image src={serachicon} alt="no image" className={"serachicon"} />
                                        </div>}
                                    </div>
                                    <div className={styles.textsbrands} onClick={() => CategoryNavigatepath(item?.slugName)}>

                                        {item.path ? item.path : <>
                                            <Image src={nodata} alt="no image" />
                                        </>}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {/* {serachdata?.length === 0 && <div>
                        <Image src={nodata} alt="no image" className={styles.nodataimage}/>

                        <div>

                            <div>
                                Popular Searches
                            </div>
                        </div>
                    </div>} */}

                   
                       
                        
                      
                      
                </div> :
                null
//                  <>
                  

//                     {loadingserah?<>
//                         <div className={styles.backgroundwhites}>

//                         <div className={styles.serachboxtexts} >
                    
//                     <div className="d-flex align-items-center justify-content-center mt-5 w-100 mx-auto">
//                     <Spinner animation="border" />
//                     </div>

//                      </div>
// </div>

//                     </>:<>
                    
//                     <div className={styles.backgroundwhites}>
                    
//                     {searchDatacategory?.length>0?<>
//                         {searchDatacategory?.map((item, index) => {
//                     return (
//                         <div>

//                             <div className={styles.serachboxtexts} onClick={() => CategoryNavigatepath(item?.slugName)}>
//                                 <div>
//                                     {item?.productThumbImage ? <>
//                                         <img
//                                             className={styles.serachshoeimages}
//                                             src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.productThumbImage}`}
//                                             alt="profile-pic"
//                                         />
//                                     </> : <>
//                                         <Image src={serachicon} alt="no image" className='serachicon' />
//                                     </>}
//                                     <span className="ms-2">{item?.productName}</span>
//                                 </div>                                   
//                             </div>
//                         </div>
//                     )
//                 })}
//                     </>:<>

         
//                    <div className="d-flex align-items-center justify-content-center mt-5">

//                    No Records
//                    </div>
                  
                
//                     </>}

                  
             

              
//                 </div>
//                     </>}
                   
//                 </>
                }



            </div>
        </div>
    )
}

export default Searchbar