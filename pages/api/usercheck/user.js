import { getSession } from "next-auth/react";
const handle = async (req, res) => {
    const session = await getSession({ req });
    if (!session) {
        res.status(401).json({ error: "unauthendicated user!!" });
    }
    else {
        res.status(200).json({ message: "user login ", session })
    }

}
export default handle;