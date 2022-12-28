import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styles from './styles/Login.module.scss';
import { withPublic } from './../../../routingcheck/RoutingCheck';
function Login() {
    const history = useRouter();
    const [datas, setDatas] = useState({
        name: "",
        email: "",
        password: ""
    });

    const { name, email, password } = datas;


    const handlesubmit = (e) => {
        setDatas({ ...datas, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && password) {
            Cookies.set("womeynauth", true);
            setTimeout(() => {
                history.push("/");
            }, 1000);

        }
    }
    useEffect(() => {
    }, [])
    return (
        <div className={styles.login}>
            <div className={styles.insidelogin}>
                <input type="text" placeholder='name' value={name} onChange={handlesubmit} name="name" />
                <input type="text" placeholder='email' value={email} onChange={handlesubmit} name="email" />
                <input type="text" placeholder='password' value={password} onChange={handlesubmit} name="password" />
                <button onClick={handleSubmit}>submit</button>
            </div>

        </div>
    )
}

export default withPublic(Login);
