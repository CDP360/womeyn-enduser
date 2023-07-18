import { useRouter } from "next/router";
import { useEffect } from "react";

export function LogoutUser() {
    const router = useRouter();
    useEffect(() => {
        localStorage.removeItem("userid");
        localStorage.removeItem("userToken");
        localStorage.removeItem("whish");
        localStorage.removeItem("user");
        localStorage.removeItem("auth");
        localStorage.removeItem("productid");
        localStorage.removeItem('signupuser');
        setTimeout(() => {
            router.push("/");
        }, 1000)
    }, []);
}