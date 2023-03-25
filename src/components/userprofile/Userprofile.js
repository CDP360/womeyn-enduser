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
        const womentoken = localStorage.getItem("womenUserToken");
        if (JSON.parse(womentoken)) {
        }
        else {
            history.push("/login");
        }
        const userid = localStorage.getItem("womenUserid");
        UserProfileInformation(JSON.parse(userid)).then((res) => {
            if (res == "Please authenticate") {
                toast.error("Please Authenticate!!",
                    {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    }
                );
                localStorage.removeItem("womenUserid");
                localStorage.removeItem("womenUserToken");
                localStorage.removeItem("womenProfile");
                localStorage.removeItem("productwhishlist");
                localStorage.removeItem("womenuser");
                localStorage.removeItem("womenauth");

                

            }
            setUser(res?.data);
            localStorage.setItem("womenProfile", JSON.stringify(res?.data?.profileImageName));
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
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
                                <Sidebar user={user} />
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
                </div>
            }
        </>
    )
}

export default Userprofile