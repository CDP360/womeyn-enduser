import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap';
import styles from './styles/Profilewomen.module.scss';
function Profilewomen({ edits }) {
    return (
        <Fragment>
            <div className={styles.mainprofileeditsection}>
                <div className={styles.splitprofilesection}>
                    <div className={styles.leftprofilesection}>
                        <div className={styles.imageround}>
                        </div>
                        <div>
                            <Button className={["edit-btn", styles.editbutton]} onClick={edits}>Edit</Button>
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
                                        kalai
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
                                        Add +
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
                                        Male
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
                                        kalaimca685@gmail.com
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
                                        8778377119
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