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
import ServiceMaindetails from './components/servicedetails/ServiceMaindetails';
import { useSelector } from 'react-redux';
import Help from '../help/Help';
import AddressCreate from './components/manageaddress/addresscreate/AddressCreate';
function Userprofile({ name, error }) {
    const history = useRouter();
    const [user, setUser] = useState([]);
    const [errors, setError] = useState(false);
    const state = useSelector((state) => state);

    useEffect(() => {
        const womentoken = localStorage.getItem("userToken");
        if (JSON.parse(womentoken)) {
        }
        else {
            history.push("/login");
        }

        CheckTokenUser();


    }, [state]);




    const CheckTokenUser = async () => {
        const userid = localStorage.getItem("userid");
        try {
            await UserProfileInformation(JSON.parse(userid)).then((res) => {
                setUser(res?.data);
            })
        }
        catch (err) {
            if (err?.response?.data?.message == "Please authenticate" || err?.response?.data?.message == "Forbidden") {
                localStorage.removeItem("userid");
                localStorage.removeItem("userToken");
                localStorage.removeItem("userTokens");
                localStorage.removeItem("whish");
                localStorage.removeItem("user");
                localStorage.removeItem("auth");
                localStorage.removeItem("productid");
                localStorage.removeItem('signupuser');
            }

            if (state?.loginUser?.error?.code === 401 || state?.loginUser?.error?.code === 403 ) {
                localStorage.removeItem("userid");
                localStorage.removeItem("userToken");
                localStorage.removeItem("userTokens");
                localStorage.removeItem("whish");
                localStorage.removeItem("user");
                localStorage.removeItem("auth");
                localStorage.removeItem("productid");
                localStorage.removeItem('signupuser');
            }


            if (state?.loginUser?.error?.message == "Please authenticate") {
                localStorage.removeItem("userid");
                localStorage.removeItem("userToken");
                localStorage.removeItem("userTokens");
                localStorage.removeItem("whish");
                localStorage.removeItem("user");
                localStorage.removeItem("auth");
                localStorage.removeItem("productid");
                localStorage.removeItem('signupuser');
            }
        }
    }
    return (
        <>

          
                    <div className={styles.insideprofilesection}>
                        <div className={styles.leftsidebarprofile}>
                            <div className='d-none d-lg-block'>
                                <Sidebar user={user} error={errors} />
                            </div>
                            <div className="d-xs-block d-md-none">
                                <Sidebar user={user} error={errors} />


                            </div>
                            <div className="d-none d-md-block d-lg-none">

                                <div>

                                    <Sidebar user={user} error={errors} />

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
                                <Manageaddress error={errors}  />
                            </div>
                            
                            }

{name == "addresscreate" && <div>
                               <AddressCreate  error={errors} />
                            </div>}

                          
                            
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
                             {name == "faq" && <div>
                             <Help/>
                            </div>
                            }
                        </div>
                    </div>
         


                <div className={styles.emptyboxrightcolor}>
                </div>
                <div className={styles.emptyboxleftcolor}>
                </div>
                <div className={styles.emptyboxleftcolor1}>
                </div>
                <div className={styles.emptyboxleftcolor2}>
                </div>
                <div className={styles.emptyboxleftcolor3}>
                </div>
                <div className={styles.emptyboxleftcolor4}>
                </div>

          



        </>
    )

}

export default Userprofile