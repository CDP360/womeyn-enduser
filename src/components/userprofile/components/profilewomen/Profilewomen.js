import React, { Fragment } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { UserProfileInformation } from '../../../../services/user-login-service/user-login-services';
import styles from './styles/Profilewomen.module.scss';
import Image from 'next/image';
import userprofile from '../../../../assests/womeynlogos/userprofile.png';
function Profilewomen({ edits, user }) {


    return (
        <Fragment>
            <div className={styles.mainprofileeditsection}>
                <div className={styles.splitprofilesection}>
                    <div className={styles.leftprofilesection}>
                        {user?.profileImageName ?
                            <img
                                width={"110px"}
                                height={"110px"}
                                style={{ borderRadius: "50%", cursor: "pointer" }}
                                src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${user?.profileImageName}`}
                                alt="profile-pic"
                            /> : <>
                                {/* <div className={styles.imageround}>

</div> */}
                                <div>
                                    <Image src={userprofile} alt="no image" className={styles.imageround} />
                                </div>
                            </>}
                        <div>
                            <Button className={["edit-btn", styles.editbutton]} onClick={edits} user={user}>Edit</Button>
                        </div>
                    </div>
                    <div className={styles.rightprofilesection}>
                        <div className={styles.gapsectiontext}>
                            <div className={styles.userdetailssection}>
                                <div className={styles.lefttextuser}>
                                    <div className='small-light-text-grey'>
                                        Username
                                    </div>
                                </div>
                                <div className={styles.righttextuser}>
                                    <div className={styles.textsizeuser}>
                                        {user?.firstName}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.userdetailssection}>
                                <div className={styles.lefttextuser}>
                                    <div className='small-light-text-grey'>
                                        Date of birth
                                    </div>
                                </div>
                                <div className={styles.righttextuser}>
                                    <div className={styles.addactive}>
                                        {user?.dob}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.userdetailssection}>
                                <div className={styles.lefttextuser}>
                                    <div className='small-light-text-grey'>
                                        Gender
                                    </div>
                                </div>
                                <div className={styles.righttextuser}>
                                    <div className={styles.textsizeuser}>
                                        {user?.gender}
                                    </div>
                                </div>

                            </div>
                            <div className={styles.userdetailssection}>
                                <div className={styles.lefttextuser}>
                                    <div className='small-light-text-grey'>
                                        Email
                                    </div>
                                </div>
                                <div className={styles.righttextuser}>
                                    <div className={styles.textsizeuser}>
                                        {user?.email}
                                    </div>
                                    <div className='verify'>
                                        Verified
                                    </div>
                                </div>
                            </div>
                            <div className={styles.userdetailssection}>
                                <div className={styles.lefttextuser}>
                                    <div className='small-light-text-grey'>
                                        Phone Number
                                    </div>
                                </div>
                                <div className={styles.righttextuser}>
                                    <div className={styles.textsizeuser}>
                                        {user?.contactNumber}
                                    </div>
                                </div>

                            </div>
                            <div className={styles.userdetailssection}>
                                <div className={styles.lefttextuser}>
                                    <div className='small-light-text-grey'>
                                        Address
                                    </div>
                                </div>
                                <div className={styles.righttextuser}>
                                    <div className={styles.textsizeuser}>
                                        Mathur(Vill),Pochmapalli(Tk),
                                        Krishnagiri(DT),pincode-603 203
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Profilewomen