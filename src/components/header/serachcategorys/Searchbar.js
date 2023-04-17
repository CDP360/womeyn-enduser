import React from 'react'
import styles from './styles/Search.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import nodata from '../../../assests/login-logos/No data-amico.png';

function Searchbar({ serachdata, serachicon }) {


    const history=useRouter();
    
    const CategoryNavigatepath=(data)=>{
        history.push(`/category/${data}`)
    }


    return (
        <div className={styles.mainserachbarsection}>
            <div className={styles.searchbarcontents}>
                {serachdata ? <div className={styles.backgroundwhites}>
                    {serachdata?.map((item, index) => {
                        return (
                            <div>

                                <div className={styles.serachboxtexts}>

                                    <div>
                                        <Image src={serachicon} alt="no image" className='serachicon' />
                                    </div>
                                    <div className={styles.textsbrands} onClick={()=>CategoryNavigatepath(item?.name)}>

                                        {item.name ? item.name : <>
                                        <Image src={nodata} alt="no image"/>
                                        </>}
                                    </div>
                                </div>
                            </div>


                        )
                    })}
                {serachdata?.length === 0 && <div>
                    <Image src={nodata} alt="no image" className={styles.nodataimage}/>
                    </div>}


                </div> : <>
                    {serachdata?.length === 0 && <div>No Result..!!!</div>}
                </>}



            </div>
        </div>
    )
}

export default Searchbar