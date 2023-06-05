import { useRouter } from 'next/router';

export const NavigatePage = () => {

    const routers = useRouter();

    useEffect(() => {
        routers.push("/");
    }, []);

    return (
        <>
        </>
    )

}