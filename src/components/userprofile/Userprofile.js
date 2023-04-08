import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import Sidebar from './components/sidebar/Sidebar';
import styles from './styles/Userprofile.module.scss';
import { UserProfileInformation } from '../../services/user-login-service/user-login-services';
import { toast } from 'react-toastify';
import Profile from './components/profile/Profile';
import EditProfile from './components/profile/editprofile/EditProfile';
import Manageaddress from './components/manageaddress/Manageaddress';
import Changepassword from './components/changepassword/Changepassword';
import Favorts from './components/favorts/Favorts';
import Orders from './components/order/Order';
import Coupon from './components/coupons/Coupons';



function Userprofile({ name, error }) {
    const history = useRouter();
    const [user, setUser] = useState([]);
    useEffect(() => {
        const womentoken = localStorage.getItem("userToken");
        if (JSON.parse(womentoken)) {
        }
        else {
            history.push("/login");
        }
        const userid = localStorage.getItem("userid");
        UserProfileInformation(JSON.parse(userid)).then((res) => {

            // if (res == "Please authenticate") {
            //     toast.error("Please Authenticate!!",
            //         {
            //             position: "top-center",  
            //             autoClose: 3000,
            //             hideProgressBar: false,
            //             closeOnClick: true,
            //             pauseOnHover: true,
            //             draggable: true,
            //             progress: undefined,
            //             theme: "dark",
            //         }
            //     );
            //     localStorage.removeItem("userid");
            //     localStorage.removeItem("userToken");
            //     localStorage.removeItem("profile");
            //     localStorage.removeItem("whish");
            //     localStorage.removeItem("user");
            //     localStorage.removeItem("auth");
            //     localStorage.removeItem("productid");
            // }


            setUser(res?.data);

        }).catch((err) => {
            // console.log(err);
            console.log(err?.res?.data?.message, "kalaimessage")

        })
    }, [])
    return (
        <>
            <>
                {error == "errors" ? <>
                    <div>
                        no records found!!!
                    </div>
                </> :
                    <div className='mainsection'>
                        <div className="insidesection">
                            <div className={styles.insideprofilesection}>
                                <div className={styles.leftsidebarprofile}>
                                    <div className='d-none d-lg-block'>
                                        <Sidebar user={user} />
                                    </div>
                                    <div className="d-xs-block d-md-none">
                                        <Sidebar user={user} />


                                    </div>
                                    <div className="d-none d-md-block d-lg-none">

                                        <div>

                                            <Sidebar user={user} />




                                        </div>
                                    </div>
                                </div>
                                <div className={styles.rightmainprofile}>
                                    {name == "youraccount" && <div>
                                        <Profile />
                                    </div>}
                                    {name == "edit" && <div>
                                        <EditProfile />
                                    </div>}

                                    {name == "address" && <div>

                                        <Manageaddress />
                                    </div>
                                    }
                                    {name == "changepassword" && <div>
                                        <Changepassword />
                                    </div>
                                    }
                                    {name == "orders" && <div>
                                        <Orders />
                                    </div>
                                    }

                                    {name == "favorts" && <div>
                                        <Favorts />
                                    </div>
                                    }
                                    {name == "coupons" && <div>
                                        <Coupon />
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={styles.leftsectionboxcolor}>

                        </div>
                        <div className={styles.righttopectionboxcolor}>

                        </div>
                        <div className={styles.rightbottomsectionboxcolor}>

                        </div>

                    </div>
                }
            </>

        </>
    )
}

export default Userprofile