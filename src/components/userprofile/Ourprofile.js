import React, { Fragment, useState } from 'react'
import Leftsidebaruser from './components/leftisdebaruser/Leftsidebaruser';
import Profilewomen from './components/profilewomen/Profilewomen';
import Pendingtransaction from './components/transactionpage/pendingtransactions/Pendingtransaction';
import styles from "./styles/Ourprofile.module.scss";
import Alltransactions from './components/transactionpage/alltransactions/Alltransactions';
import Ongoingorders from './components/oderspage/ongoingorders/Ongoingorders';
import Allorders from './components/oderspage/allorders/Allorders';
import Reviews from './components/favoritespage/reviews/Reviews';
import Reviewsorder from './components/oderspage/reviews/Reviews';
import Customerghelp from './components/oderspage/customerhelp/Customerghelp';
import Wishlist from './components/favoritespage/wishlist/Wishlist';
import Recentlyview from './components/favoritespage/recentlyview/Recentlyview';
import Address from './components/address/Address';
import Editprofile from './components/editprofile/Editprofile';
function Ourprofile() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [indexsidebar, setIndexsidebar] = useState(0);
  const handleshowchange = () => {
    setShow(true);
  }
  return (
    <Fragment>
      <div className={styles.mainuserprofilesection}>
        <div className={styles.insideprofilesection}>
          <div className={styles.leftsidebarprofile}>
            <Leftsidebaruser indexsidebar={setIndexsidebar} setShow={setShow} indexcheck={indexsidebar}/>
          </div>
          <div className={styles.rightbodyprofilesection}>
            {indexsidebar === 0 && (
              <>
                {show ? <>
                  <div>
                    <Editprofile move={setShow} />
                  </div>

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
                      <Profilewomen edits={handleshowchange} indexsidebar={setIndexsidebar} />
                    </div>
                  </div>
                  <div hidden={index != 1}>
                    <Address />
                  </div>
                </>}
              </>
            )}

            {/* pending transactions start */}
            {indexsidebar === 1 && (
              <div>
                <Pendingtransaction />
              </div>
            )}
            {/* pending transactions end */}

            {/* Alltransactions transactions start */}
            {indexsidebar === 2 && (
              <div>
                <Alltransactions />
              </div>
            )}
            {/* Alltransactions transactions end */}

            {/* orders Ongoingorders start */}
            {indexsidebar === 3 && (
              <div>
                <Ongoingorders />
              </div>
            )}
            {/* orders Ongoingorders end */}

            {/* orders Ongoingorders start */}
            {indexsidebar === 4 && (
              <div>
                <Allorders />
              </div>
            )}
            {/* orders Ongoingorders end */}

            {/* orders Reviews start */}
            {indexsidebar === 5 && (
              <div>
                <Reviewsorder />
              </div>
            )}
            {/* orders Reviews end */}


            {/* orders Customerghelp start */}
            {indexsidebar === 6 && (
              <div>
                <Customerghelp />
              </div>
            )}
            {/* orders Customerghelp end */}


            {/* favorits Wishlist start */}
            {indexsidebar === 7 && (
              <div>
                <Wishlist />
              </div>
            )}
            {/* favorits Wishlist end */}

            {/* favorits Recentlyview start */}
            {indexsidebar === 8 && (
              <div>
                <Recentlyview />
              </div>
            )}
            {/* favorits Recentlyview end */}

            {/* favorits Reviews start */}
            {indexsidebar === 9 && (
              <div>
                <Reviews />
              </div>
            )}
            {/* favorits Reviews end */}


          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Ourprofile