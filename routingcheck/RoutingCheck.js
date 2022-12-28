import Cookies from "js-cookie"
import { useRouter } from "next/router";



export function withPublic(Component) {
    return function WithPublic(props) {
        const checkcookie = Cookies.get("womeynauth");
        const router = useRouter();
        if (checkcookie) {
            router.replace("/")
            return <h1>Loading.....</h1>

        }
        return <Component {...props} />

    }
}



export function withProtected(Component) {
    return function WithProtected(props) {
        const checkcookie = Cookies.get("womeynauth");
        if (!checkcookie) {
            router.replace("/login")
            return <h1>Loading.....</h1>

        }
        return <Component {...props} />

    }
}