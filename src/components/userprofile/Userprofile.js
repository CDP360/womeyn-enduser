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
import { useDispatch, useSelector } from 'react-redux';
import ServiceMaindetails from './components/servicedetails/ServiceMaindetails';
function Userprofile({ name, error }) {
    const history = useRouter();
    const [user, setUser] = useState([]);
    const [errors, setError] = useState(false);
    useEffect(() => {
        const womentoken = localStorage.getItem("userToken");
        if (JSON.parse(womentoken)) {
        }
        else {
            history.push("/login");
        }
        const userid = localStorage.getItem("userid");
        UserProfileInformation(JSON.parse(userid)).then((res) => {
            if (res == "Please authenticate") {
                setError(true);
                localStorage.removeItem("userid");
                localStorage.removeItem("userToken");
                localStorage.removeItem("whish");
                localStorage.removeItem("user");
                localStorage.removeItem("auth");
                localStorage.removeItem("productid");
            }
            setUser(res?.data);
        }).catch((err) => {
            setError(false);
        })
    }, []);

    const NavigateRedirect = () => {
        history?.push("/errorboundary")
    }
    if (errors) {
        return (
            <div>
                {NavigateRedirect()}
            </div>
        )
    }
    else {
        return (
            <>

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
                                    <Profile users={user} error={errors} />
                                </div>}
                                {name == "edit" && <div>
                                    <EditProfile users={user} error={errors} />
                                </div>}

                                {name == "address" && <div>

                                    <Manageaddress error={errors} />
                                </div>
                                }
                                {name == "changepassword" && <div>
                                    <Changepassword error={errors} />
                                </div>
                                }
                                {name == "orders" && <div>
                                    <Orders error={errors} />
                                </div>
                                }

                                {name == "services" && <div>
                                    <ServiceMaindetails error={errors} />
                                </div>
                                }
                                {name == "favorts" && <div>
                                    <Favorts error={errors} />
                                </div>
                                }
                                {name == "coupons" && <div>
                                    <Coupon error={errors} />
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



            </>
        )
    }
}

export default Userprofile