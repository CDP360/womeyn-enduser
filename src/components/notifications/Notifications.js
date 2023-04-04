import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import styles from './styles/Notifications.module.scss';
function Notifications() {


  const urls = "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60";

  // const [data, setData] = useState([]);

const data=[
{
  id:1,
  email:"kalai@mailinator.com",
  
},
{
  id:1,
  email:"kalai@mailinator.com"
},
{
  id:1,
  email:"kalai@mailinator.com"
},
{
  id:1,
  email:"kalai@mailinator.com"
},
{
  id:1,
  email:"kalai@mailinator.com"
},
{
  id:1,
  email:"kalai@mailinator.com"
},
{
  id:1,
  email:"kalai@mailinator.com"
},
{
  id:1,
  email:"kalai@mailinator.com"
},
{
  id:1,
  email:"kalai@mailinator.com"
},
{
  id:1,
  email:"kalai@mailinator.com"
},
{
  id:1,
  email:"kalai@mailinator.com"
},
{
  id:1,
  email:"kalai@mailinator.com"
},
{
  id:1,
  email:"kalai@mailinator.com"
},
{
  id:1,
  email:"kalai@mailinator.com"
},
{
  id:1,
  email:"kalai@mailinator.com"
},
{
  id:1,
  email:"kalai@mailinator.com"
},
]
  return (
    <div className="mainsection">
      <div className="insidesection">
        <div className={styles.splitboxnotification}>
          <div className={styles.boxinsidesection}>
            <div className={styles.textnotification}>
              Notifications
            </div>
            <div>
              {data?.map((item, index) => {
                return (
                  <>


                    <div className={styles.splitinsidecontent}>
                      <div>
                        <img src={urls} alt="no image" className={styles.userimage} />
                      </div>

                      <div className={styles.notificationflexcolumn}>
                        <div className={styles.cursors}>
                          {item?.email}

                        </div>
                        <div className={styles.time}>
                          1m ago.
                        </div>
                      </div>

                    </div>
                    <div className={styles.boderbottmtexts}>

                    </div>

                  </>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Notifications