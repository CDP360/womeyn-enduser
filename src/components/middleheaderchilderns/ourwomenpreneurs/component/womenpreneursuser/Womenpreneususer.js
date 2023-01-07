import { useRouter } from 'next/router'
import React from 'react'

function Womenpreneususer() {
    const router = useRouter();
    return (
        <div>
            <button onClick={() => router.push("/login?redirect=/shipping")}>
                Check out
            </button>

        </div>
    )
}

export default Womenpreneususer