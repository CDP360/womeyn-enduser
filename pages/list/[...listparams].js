import { useRouter } from 'next/router';
import React from 'react'

function DetailsPage() {
    const router = useRouter();
    const { listparams } = router.query;
    if (!listparams) return null;
    return (
        <div>
            {listparams[0] && <div>kalai {listparams[0]}</div>}
            {listparams[1] && <div>mani {listparams[1]}</div>}
            {listparams[2] && <div>nazriya {listparams[2]}</div>}
        </div>
    )
}

export default DetailsPage;
