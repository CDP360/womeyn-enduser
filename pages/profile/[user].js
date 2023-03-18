import { useRouter } from 'next/router'
import React,{useEffect,useState} from 'react'
import Userprofile from '../../src/components/userprofile/Userprofile'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

function profile() {
    const history=useRouter();

    const [users,setUsers]=useState("");
    const [error,setError]=useState("");


    useEffect(()=>{
        if(history?.query?.user=="youraccount")
        {
            setUsers("youraccount")
        }
        else if(history?.query?.user=="edit")
        {
            setUsers("edit")
        }
        else if(history?.query?.user=="address")
        {
            setUsers("aress");
        }
        else
        {
            setError("error");
        }
    },[users,error])

    
    return (
        <LayoutHeader title={"Profile"}>
            <Userprofile name={history?.query?.user} users={users} error={error}/>
        </LayoutHeader>
    )
}

export default profile