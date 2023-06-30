import instanceBaseurl from "../../config/Baseurl"

export function getBlogs(current) {
    // return instanceBaseurl.get("/common/top-womenprenuers").then((res) => {
    //     return res
    // }).catch((err) => { return err });

    // return new Promise((resolve, reject) => {
    //     instanceBaseurl.get(`/common/blog-posts?`).then(response => {
    //         resolve(response)
    //     }).catch(err => {
    //         reject(err)
    //     })
    // })

    if(current)
{
    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/blog-posts?limit=12&page=${current}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}
else
{
    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/blog-posts?limit=12`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}
}


export function getSingleBlogs(id) {
    // return instanceBaseurl.get("/common/top-womenprenuers").then((res) => {
    //     return res
    // }).catch((err) => { return err });

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/blog-posts/${id}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}