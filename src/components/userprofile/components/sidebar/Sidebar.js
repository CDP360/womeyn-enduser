import React, { Fragment, useEffect, useState } from 'react'
import styles from './styles/Sidebar.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import userprofile from '../../../../assests/womeynlogos/userprofile.png';
import camera from '../../../../assests/womeynlogos/cameraprofile.png';
import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';
import { useRouter } from 'next/router';
import { CreatePassword, UserProfileImageupload, UserProfileInformation } from '../../../../services/user-login-service/user-login-services';
import { toast } from 'react-toastify';
import congrtsimage from '../../../../assests/login-logos/congratusimage.png';
import profile from '../../../../assests/profile-logo/Profile.png';
import order from '../../../../assests/profile-logo/order.png';
import favorts from '../../../../assests/profile-logo/favorts.png';
import coupons from '../../../../assests/profile-logo/coupons.png';
import orderactive from '../../../../assests/profile-logo/orderactive.png';
import favortsactive from '../../../../assests/profile-logo/favortsactive.png';
import couponsactive from '../../../../assests/profile-logo/ticketactive.png';
import logout from '../../../../assests/profile-logo/logout.png';

import serviceinactive from '../../../../assests/profile-logo/service.png';
import serviceactive from '../../../../assests/profile-logo/service_c.png';
import helps from '../../../../assests/profile-logo/help.png';
import helpss from '../../../../assests/profile-logo/help_c.png';
import profiles from '../../../../assests/profile-logo/Profile_w.png';




function Sidebar({ user, error }) {
    const [imageshowmodel, setImageShowModel] = useState(true);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);

    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);

    const [indexs, setIndexs] = useState(0);
    const history = useRouter();
    const pathname = history?.query?.user;
    const [image, setImage] = useState("");
    const [showuploadbutton, setShowUploadButton] = useState(false);
    const handleImagechange = (e) => {
        setImage(e.target.files[0]);
        setShowUploadButton(true);
    }
    const ImageUploadSuccess = () => {
        const userid = localStorage.getItem("userid");
        const formDatas = new FormData();
        formDatas.append("upl", image);
        UserProfileImageupload(JSON.parse(userid), formDatas).then((res) => {
            handleClose();
            setTimeout(() => {
                handleShow1();

            }, 200)
        }).catch((err) => {
            console.log(err);
        })
    }
    const confirmuploadprofileimage = () => {
        window.location.reload();
        handleClose1();
    }


    const routingpath = [
        {
            id: 1,
            name: "youraccount",
            path: "Personal Information"
        },
        {
            id: 2,
            name: "address",
            path: "Manage Address"
        },
        {
            id: 3,
            name: "changepassword",
            path: "Change Password"
        }
    ]

    const PathNavigate = (data, index) => {
        history.push(`/profile/${data}`);
        setIndexs(index);
    }
    useEffect(() => {
        if (error) {
            localStorage.removeItem("userid");
            localStorage.removeItem("userToken");
            localStorage.removeItem("whish");
            localStorage.removeItem("user");
            localStorage.removeItem("auth");
            localStorage.removeItem("productid");
            history.push("/login");
        }
    }, [indexs, error])


    const LogoutUser = () => {
        localStorage.removeItem("userid");
        localStorage.removeItem("userToken");
        localStorage.removeItem("whish");
        localStorage.removeItem("user");
        localStorage.removeItem("auth");
        toast.success("Logout Successfull", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
        setTimeout(() => {
            history.push("/");
        }, 300)
    }

    return (
        <>
            <div className="d-none d-lg-block">
                <div className={styles.mainsidebarsection}>
                    <div className={styles.insideprofilesection}>
                        <div className={styles.imagesectionprofile} >
                            {user?.profileImageName ? <div onClick={handleShow2}>
                                <img
                                    className={styles.editprofilesection}
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${user?.profileImageName}`}
                                    alt="profile-pic"
                                />
                            </div> : <Image src={userprofile} alt="no image" className={styles.profileimage} onClick={handleShow} />}
                            <div>
                                <Image src={camera} alt="no image" className={styles.profileimagecamera} onClick={handleShow} />
                            </div>
                        </div>
                        <div className={styles.imagesectioncontent}  >
                            {user?.firstName}
                        </div>
                    </div>
                </div>

                <div className={styles.splitSidebarsewction}>

                    <div className={styles.insidesectionsplitsidebarsection}>
                        <div className={styles.profilecontentinlistsection}>
                            <div >
                            {pathname == "youraccount" || pathname=="address" || pathname=="changepassword" ?
                                <Image src={profile} alt="no image" className={styles.profileicon}/>
                            
                            :<Image src={profiles} alt="no image" className={styles.profileicon} />}
                            </div>
                            <div className={styles.boldtexts}>
                                Profile
                            </div>
                        </div>
                        <div className={styles.profiletextgapsection}>

                            {routingpath?.map((item, index) => {
                                return (
                                    <div onClick={() => PathNavigate(item?.name)} className={item?.name == pathname ? styles.activebutton : styles.disablebutton} key={index}>
                                        {item?.path}
                                    </div>
                                )
                            })}

                        </div>
                        <div className={styles.dashedsectionmain}>
                            <div className={styles.insidedashedsection}>
                            </div>
                        </div>
                        <div className={pathname == "orders" ? styles.activeboldtextss : styles.profilecontentinlistsection} onClick={() => PathNavigate("orders")}>
                            <div>
                                {pathname == "orders" ? <Image src={orderactive} alt="no image" className={styles.profileicon} /> : <Image src={order} alt="no image" className={styles.profileicon} />}
                            </div>
                            <div className={pathname == "orders" ? styles.boldtextactive : styles.boldtexts}>
                                Product Orders
                            </div>
                        </div>


                        <div className={styles.dashedsectionmain}>
                            <div className={styles.insidedashedsection}>
                            </div>
                        </div>

                        <div className={pathname == "services" ? styles.activeboldtextss : styles.profilecontentinlistsection} onClick={() => PathNavigate("services")}>
                            <div>
                                {pathname == "services" ? <Image src={serviceactive} alt="no image" className={styles.profileicon} /> : <Image src={serviceinactive} alt="no image" className={styles.profileicon} />}
                            </div>
                            <div className={pathname == "services" ? styles.boldtextactive : styles.boldtexts}>
                                Service Orders
                            </div>
                        </div>

                        <div className={styles.dashedsectionmain}>
                            <div className={styles.insidedashedsection}>
                            </div>
                        </div>


                        <div className={pathname == "favorts" ? styles.activeboldtextss : styles.profilecontentinlistsection} onClick={() => PathNavigate("favorts")}>
                            <div >
                                {pathname == "favorts" ? <Image src={favortsactive} alt="no image" className={styles.profileicon} /> : <Image src={favorts} alt="no image" className={styles.profileicon} />}
                            </div>
                            <div className={pathname == "favorts" ? styles.boldtextactive : styles.boldtexts}>
                                Favorites
                            </div>
                        </div>
                        <div className={styles.dashedsectionmain}>
                            <div className={styles.insidedashedsection}>
                            </div>
                        </div>
                        <div className={pathname == "coupons" ? styles.activeboldtextss : styles.profilecontentinlistsection} onClick={() => PathNavigate("coupons")}>
                            <div >
                                {pathname == "coupons" ? <Image src={couponsactive} alt="no image" className={styles.profileicon} /> : <Image src={coupons} alt="no image" className={styles.profileicon} />}
                            </div>
                            <div className={pathname == "coupons" ? styles.boldtextactive : styles.boldtexts}>
                                Coupons
                            </div>
                        </div>

                        <div className={styles.dashedsectionmain}>
                            <div className={styles.insidedashedsection}>
                            </div>
                        </div>

                        <div className={pathname == "faq" ? styles.activeboldtextss : styles.profilecontentinlistsection} onClick={() => PathNavigate("faq")}>
                            <div >
                                {pathname == "faq" ? <Image src={helpss} alt="no image" className={styles.profileicon} /> : <Image src={helps} alt="no image" className={styles.profileicon} />}
                            </div>
                            <div className={pathname == "faq" ? styles.boldtextactive : styles.boldtexts}>
                             FAQ
                            </div>
                        </div>
                        <div className={styles.dashedsectionmain}>
                            <div className={styles.insidedashedsection}>
                            </div>
                        </div>
                        <div className={styles.profilecontentinlistsection} onClick={LogoutUser}>
                            <div >
                                <Image src={logout} alt="no image" className={styles.profileicon} />
                            </div>
                            <div className={styles.boldtexts}>
                                Logout
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="d-xs-block d-md-none">

                <div className={styles.mainsidebarsection}>
                    <div className={styles.insideprofilesection}>
                        <div className={styles.imagesectionprofile} >
                            {user?.profileImageName ? <>
                                <img
                                    className={styles.editprofilesection}
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${user?.profileImageName}`}
                                    alt="profile-pic"
                                />
                            </> :
                             <Image src={userprofile} alt="no image" className={styles.profileimage} onClick={handleShow} />}
                            <div>
                                <Image src={camera} alt="no image" className={styles.profileimagecamera} onClick={handleShow} />
                            </div>
                        </div>
                        <div className={styles.imagesectioncontent}  >
                            {user?.firstName}
                        </div>
                    </div>
                </div>

                <div className={styles.splitSidebarsewction}>

                    <div className={styles.insidesectionsplitsidebarsection}>
                        <div className={styles.profilecontentinlistsection}>
                            <div >
                                <Image src={profile} alt="no image" className={styles.profileicon} />
                            </div>
                            <div className={styles.boldtexts}>
                                Profile
                            </div>
                        </div>
                        <div className={styles.profiletextgapsection}>

                            {routingpath?.map((item, index) => {
                                return (
                                    <div onClick={() => PathNavigate(item?.name)} className={item?.name == pathname ? styles.activebutton : styles.disablebutton} key={index}>
                                        {item?.path}
                                    </div>
                                )
                            })}

                        </div>
                        <div className={styles.dashedsectionmain}>
                            <div className={styles.insidedashedsection}>
                            </div>
                        </div>
                        <div className={pathname == "orders" ? styles.activeboldtextss : styles.profilecontentinlistsection} onClick={() => PathNavigate("orders")}>
                            <div>
                                {pathname == "orders" ? <Image src={orderactive} alt="no image" className={styles.profileicon} /> : <Image src={order} alt="no image" className={styles.profileicon} />}
                            </div>
                            <div className={pathname == "orders" ? styles.boldtextactive : styles.boldtexts}>
                                Orders
                            </div>
                        </div>

                        <div className={styles.dashedsectionmain}>
                            <div className={styles.insidedashedsection}>
                            </div>
                        </div>

                        <div className={pathname == "services" ? styles.activeboldtextss : styles.profilecontentinlistsection} onClick={() => PathNavigate("services")}>
                            <div>
                                {pathname == "services" ? <Image src={orderactive} alt="no image" className={styles.profileicon} /> : <Image src={order} alt="no image" className={styles.profileicon} />}
                            </div>
                            <div className={pathname == "services" ? styles.boldtextactive : styles.boldtexts}>
                                Services
                            </div>
                        </div>

                        <div className={styles.dashedsectionmain}>
                            <div className={styles.insidedashedsection}>
                            </div>
                        </div>
                        <div className={pathname == "favorts" ? styles.activeboldtextss : styles.profilecontentinlistsection} onClick={() => PathNavigate("favorts")}>
                            <div >
                                {pathname == "favorts" ? <Image src={favortsactive} alt="no image" className={styles.profileicon} /> : <Image src={favorts} alt="no image" className={styles.profileicon} />}
                            </div>
                            <div className={pathname == "favorts" ? styles.boldtextactive : styles.boldtexts}>
                                Favorites
                            </div>
                        </div>
                        <div className={styles.dashedsectionmain}>
                            <div className={styles.insidedashedsection}>
                            </div>
                        </div>
                        <div className={pathname == "coupons" ? styles.activeboldtextss : styles.profilecontentinlistsection} onClick={() => PathNavigate("coupons")}>
                            <div >
                                {pathname == "coupons" ? <Image src={couponsactive} alt="no image" className={styles.profileicon} /> : <Image src={coupons} alt="no image" className={styles.profileicon} />}
                            </div>
                            <div className={pathname == "coupons" ? styles.boldtextactive : styles.boldtexts}>
                                Coupons
                            </div>
                        </div>
                        <div className={styles.dashedsectionmain}>
                            <div className={styles.insidedashedsection}>
                            </div>
                        </div>
                        <div className={pathname == "help" ? styles.activeboldtextss : styles.profilecontentinlistsection} onClick={() => PathNavigate("help")}>
                            <div >
                                {pathname == "help" ? <Image src={helpss} alt="no image" className={styles.profileicon} /> : <Image src={helps} alt="no image" className={styles.profileicon} />}
                            </div>
                            <div className={pathname == "help" ? styles.boldtextactive : styles.boldtexts}>
                               Faq
                            </div>
                        </div>
                        <div className={styles.dashedsectionmain}>
                            <div className={styles.insidedashedsection}>
                            </div>
                        </div>
                        <div className={styles.profilecontentinlistsection} onClick={LogoutUser}>
                            <div >
                                <Image src={logout} alt="no image" className={styles.profileicon} />
                            </div>
                            <div className={styles.boldtexts}>
                                Logout
                            </div>
                        </div>
                    </div>

                </div>



            </div>

            <div className="d-none d-md-block d-lg-none">

                <div className={styles.profilesidebarmobile}>

                    <div className={styles.leftsidebarprofile}>

                        <div className={styles.imagesectionprofiles} >
                            {user?.profileImageName ? <>
                                <img
                                    className={styles.editprofilesection}
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${user?.profileImageName}`}
                                    alt="profile-pic"
                                />
                            </> : <Image src={userprofile} alt="no image" className={styles.profileimage} onClick={handleShow} />}
                            <div>
                                <Image src={camera} alt="no image" className={styles.profileimagecamera} onClick={handleShow} />
                            </div>
                        </div>
                        <div className={styles.imagesectioncontent}  >
                            {user?.firstName}
                        </div>
                    </div>

                    <div className={styles.middlesidebarprofile}>


                        <div className={styles.profilecontentinlistsection}>
                            <div >
                                <Image src={profile} alt="no image" className={styles.profileicon} />
                            </div>
                            <div className={styles.boldtexts}>
                                Profile
                            </div>
                        </div>
                        <div className={styles.profiletextgapsection}>

                            {routingpath?.map((item, index) => {
                                return (
                                    <div onClick={() => PathNavigate(item?.name)} className={item?.name == pathname ? styles.activebutton : styles.disablebutton} key={index}>
                                        {item?.path}
                                    </div>
                                )
                            })}

                        </div>

                    </div>

                    <div className={styles.rightsidebarprofile}>

                        <div className={pathname == "orders" ? styles.activeboldtextss : styles.profilecontentinlistsection} onClick={() => PathNavigate("orders")}>
                            <div>
                                {pathname == "orders" ? <Image src={orderactive} alt="no image" className={styles.profileicon} /> : <Image src={order} alt="no image" className={styles.profileicon} />}
                            </div>
                            <div className={pathname == "orders" ? styles.boldtextactive : styles.boldtexts}>
                                Orders
                            </div>
                        </div>

                        <div className={styles.dashedsectionmain}>
                            <div className={styles.insidedashedsection}>
                            </div>
                        </div>
                        <div className={pathname == "favorts" ? styles.activeboldtextss : styles.profilecontentinlistsection} onClick={() => PathNavigate("favorts")}>
                            <div >
                                {pathname == "favorts" ? <Image src={favortsactive} alt="no image" className={styles.profileicon} /> : <Image src={favorts} alt="no image" className={styles.profileicon} />}
                            </div>
                            <div className={pathname == "favorts" ? styles.boldtextactive : styles.boldtexts}>
                                Favorites
                            </div>
                        </div>
                        <div className={styles.dashedsectionmain}>
                            <div className={styles.insidedashedsection}>
                            </div>
                        </div>
                        <div className={pathname == "coupons" ? styles.activeboldtextss : styles.profilecontentinlistsection} onClick={() => PathNavigate("coupons")}>
                            <div >
                                {pathname == "coupons" ? <Image src={couponsactive} alt="no image" className={styles.profileicon} /> : <Image src={coupons} alt="no image" className={styles.profileicon} />}
                            </div>
                            <div className={pathname == "coupons" ? styles.boldtextactive : styles.boldtexts}>
                                Coupons
                            </div>
                        </div>
                        <div className={styles.dashedsectionmain}>
                            <div className={styles.insidedashedsection}>
                            </div>
                        </div>


                        <div className={pathname == "help" ? styles.activeboldtextss : styles.profilecontentinlistsection} onClick={() => PathNavigate("help")}>
                            <div >
                                {pathname == "help" ? <Image src={helpss} alt="no image" className={styles.profileicon} /> : <Image src={helps} alt="no image" className={styles.profileicon} />}
                            </div>
                            <div className={pathname == "help" ? styles.boldtextactive : styles.boldtexts}>
                                Help
                            </div>
                        </div>

                        <div className={styles.dashedsectionmain}>
                            <div className={styles.insidedashedsection}>
                            </div>
                        </div>
                        <div className={styles.profilecontentinlistsection} onClick={LogoutUser}>
                            <div >
                                <Image src={logout} alt="no image" className={styles.profileicon} />
                            </div>
                            <div className={styles.boldtexts}>
                                Logout
                            </div>
                        </div>
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
                        <div className={styles.cursors} onClick={handleClose}>
                            <ion-icon name="close-outline" size="large"></ion-icon>
                        </div>
                        <div className="mt-3 mb-4">
                            <div className={styles.changepicturesize}>Change picture </div>
                        </div>
                        <div className="text-center">

                            {image ? <label htmlFor="upload-button">
                                <>
                                    <img
                                        className={styles.editmodelprofile}

                                        style={{ borderRadius: "50%", cursor: "pointer" }}
                                        src={URL.createObjectURL(image)}
                                    />

                                    {showuploadbutton ? <>
                                    </> : <>
                                        <div className="mt-2">
                                            <Button onClick={uploadImages} className="upload-btn" >Upload</Button>
                                        </div>
                                    </>}
                                </>
                            </label> : (
                                <>
                                    {/* user?.profileImageName  */}
                                    {user?.profileImageName ? <label htmlFor="upload-button">
                                        <img

                                            className={styles.editmodelprofile}
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${user?.profileImageName}`}
                                            alt="profile-pic"
                                        />
                                    </label> :
                                        <img

                                            src="https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png"
                                            alt="profile-pic"
                                            className={styles.editmodelprofile}

                                        />


                                    }
                                </>)}
                        </div>
                        <div className="text-center mt-4 mb-1">
                            {/* <div>
                                    <span className='active'> Drag & drop</span> an image
                                </div> */}
                            <label htmlFor="upload-button">
                                <span className='active'>Click Here</span> an image
                            </label>
                            <input type="file" id="upload-button" style={{ display: 'none' }} onChange={handleImagechange} />
                        </div>
                    </Modal.Body>
                    <div className="text-center mb-4 mt-3">
                        <Button className={styles.editbuttonssdone} onClick={ImageUploadSuccess}>Done</Button>
                    </div>
                </Modal>

                <div>
                    <Modal show={show1}
                        onHide={handleClose1}
                        backdrop="static"
                        keyboard={false}
                        centered>

                        <Modal.Body>
                            <div className={styles.cursors} onClick={handleClose1}>
                                <ion-icon name="close-outline" size="large"></ion-icon>
                            </div>
                            <div className={styles.congratus}>
                                <div className={styles.insidesectioncongratus}>
                                    <div className="mt-2 mb-3">
                                        <Image src={congrtsimage} alt="no image" className={styles.congratusimage} />
                                    </div>
                                    <div className="mt-2 mb-3">
                                        <h1 className={styles.congratustext}>Congratulations!</h1>

                                    </div>
                                    <div className={styles.yourprofilehas}>
                                        Your profile has been Updated!
                                    </div>
                                    <div className='mt-4 mb-4'>
                                        <Button className={styles.editbuttonssdone} onClick={confirmuploadprofileimage}>Done</Button>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>

                    </Modal>
                </div>



                <div>
                    <Modal show={show2}
                        onHide={handleClose2}
                       
                        centered>

                        <Modal.Body>
                            <div className={styles.cursors} onClick={handleClose2}>
                                <ion-icon name="close-outline" size="large"></ion-icon>
                            </div>
                            <div className={styles.congratuss}>
                                <div className={styles.insidesectioncongratuss}>
                                {user?.profileImageName ? 
                                        <img

                                            className={styles.editmodelprofiles}
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${user?.profileImageName}`}
                                            alt="profile-pic"
                                        />
                                   :
                                       
null

                                    }
                                </div>
                            </div>
                        </Modal.Body>

                    </Modal>
                </div>

            </>



        </>
    )




}

export default Sidebar