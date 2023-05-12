import instanceBaseurl from "../../config/Baseurl"

export function getBlogs() {
    // return instanceBaseurl.get("/common/top-womenprenuers").then((res) => {
    //     return res
    // }).catch((err) => { return err });

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/blog-posts`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
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