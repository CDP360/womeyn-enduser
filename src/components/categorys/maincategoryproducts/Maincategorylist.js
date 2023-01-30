import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Maincategorylist() {

    const [product, setProducts] = useState([]);

    const [loading, setLoading] = useState(false);

    let componentrender = true;
    useEffect(() => {



        const getproducts = async () => {
            setLoading(true);
            const response = await axios.get("https://fakestoreapi.com/products")
            if (componentrender) {
                setProducts(await response?.data);
                setLoading(false);
            }
            return () => {
                componentrender = false;
            }
        }
        getproducts();
    }, [])


    const Loading = () => {
        return (
            <div>
                <SkeletonTheme baseColor="red" highlightColor="#444">

                    <Skeleton count={3} />

                </SkeletonTheme>
            </div>
        )
    }

    return (
        <div>
            {loading ? <div><Loading /></div> : <div>
                {product?.map((item, index) => {
                    return (
                        <div>
                            kalai
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default Maincategorylist