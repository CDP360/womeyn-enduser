import React from "react";
import styles from "./styles/Servicetracking.module.scss";
function Servicetracking() {
  return (
    <div className="mainsection">
      <div className="insidesection">
        <div className={styles.serviceTrackingHeader}>
            <p className={styles.serviceTrackingHeaderText}>Service Tracking</p>
            <button className={styles.serviceTrackingExploreBtn}>Explore more</button>
        </div>
        <div className={styles.serviceTrackingCenterContainer}>
            <div className={styles.serviceTrackingLeftSide}>
                <p className={styles.serviceTrackingLeftText}>Service Booking Id</p>
                <p className={styles.serviceTrackingLeftText1}>1000162584972</p>
                <p className={styles.serviceTrackingLeftText2}>Booking Status: <span>Success</span></p>
                <p className={styles.serviceTrackingLeftText3}>Service Duration</p>
                <p className={styles.serviceTrackingLeftText1}>1 month</p>
                <hr className={styles.serviceTrackingDotted}/>
                <p className={styles.serviceTrackingLeftText3}>Tutor/Service Povider </p>
                <p className={styles.serviceTrackingLeftText1}>Nike Official</p>
                <hr className={styles.serviceTrackingDotted}/>
                <p className={styles.serviceTrackingLeftText3}>Address</p>
                <p className={styles.serviceTrackingLeftText4}>177A Bleecker Street, New York City, NY 10012-1406, on the corner of Bleecker Street and Fenno Place in the heart of Greenwich Village.</p>
            </div>
            <div className={styles.serviceTrackingRightSideFull}>
            <div className={styles.serviceTrackingRightSide}>
                <div className={styles.serviceTrackingInnerLeft}>
                    <div className={styles.serviceTrackingInnerDividing}>
                        <div>
                            <p className={styles.serviceTrackingDimText}>Start date</p>
                            <p className={styles.serviceTrackingDarkText}>28/02/2023</p>
                            <p className={styles.serviceTrackingDimText}>Session Duration</p>
                            <p className={styles.serviceTrackingDarkText}>1 hour</p>
                        </div>
                        <div>
                            <p className={styles.serviceTrackingDimText}>End date</p>
                            <p className={styles.serviceTrackingDarkText}>28/03/2023</p>
                            <p className={styles.serviceTrackingDimText}>Session Timing</p>
                            <p className={styles.serviceTrackingDarkText}>9:00 am - 10:00 am</p>
                        </div>
                    </div>
                    <hr className={styles.serviceTrackingDot}/>
                    <p className={styles.serviceTrackingDimText1}>Total Number of session</p>
                    <p className={styles.serviceTrackingDarkText1}>30</p>
                    <p className={styles.serviceTrackingDimText1}>Number of session remaining</p>
                    <p className={styles.serviceTrackingDarkText1}>17</p>
                </div>
                <div className={styles.serviceTrackingInnerRight}>
                    <div className={styles.serviceTracking1stBanner}>
                        <div className={styles.serviceTrackingImgContainer}></div>
                        <div className={styles.serviceTrackingImgContent}>
                            <p className={styles.serviceTrackingImgName}>Zumpa class</p>
                            <p className={styles.serviceTrackingRate}>$25</p>
                        </div>
                    </div>
                    <p className={styles.serviceTrackingCancel}>Cancel service</p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Servicetracking;
