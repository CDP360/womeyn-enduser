import { useRouter } from 'next/router'
import React,{useEffect,useState} from 'react'
import Userprofile from '../../src/components/userprofile/Userprofile'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';
import Head from "next/head";


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

<Head>
        <title>Womeyn Profile</title>
        <meta name="description" content="Women Profile" key="desc" />
        <meta property="og:title" content="Women Profile" />
        <meta
          property="og:description"
          content="Profile"
        />
        <meta
          property="og:image"
          content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
        />
      </Head>

            <Userprofile name={history?.query?.user} users={users} error={error}/>
        </LayoutHeader>
    )
}

export default profile