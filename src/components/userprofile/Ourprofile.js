import React, { Fragment, useState } from 'react'
import Leftsidebaruser from './components/leftisdebaruser/Leftsidebaruser';
import Profilewomen from './components/profilewomen/Profilewomen';
import styles from "./styles/Ourprofile.module.scss";
function Ourprofile() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [indexsidebar, setIndexsidebar] = useState(0);

  const handleshowchange = () => {
    setShow(true);
  }
  const handlechangemove = () => {
    setShow(false);

  }
  return (
    <Fragment>
      <div className={styles.mainuserprofilesection}>
        <div className={styles.insideprofilesection}>
          <div className={styles.leftsidebarprofile}>
            <Leftsidebaruser indexsidebar={setIndexsidebar} />
          </div>
          <div className={styles.rightbodyprofilesection}>
            <>

              {show ? <>
                <div>
                  Edit Profile
                </div>
                <button onClick={handlechangemove}>edit success</button>

              </> : <>
                <div className={styles.profileheadersection}>
                  <div className={`${index === 0 ? styles.activecode : styles.profiletext}`} onClick={() => setIndex(0)}>
                    Profile
                  </div>
                  <div className={`${index === 1 ? styles.activecode : styles.profiletext}`} onClick={() => setIndex(1)}>
                    Address
                  </div>
                </div>
                <div hidden={index != 0}>
                <div>
                  <Profilewomen edits={handleshowchange} />
                </div>
              </div>
              <div hidden={index != 1}>
                Address
              </div>

              </>}

              
            </>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Ourprofile