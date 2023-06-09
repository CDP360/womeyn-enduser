import React, { Fragment,useState,useEffect } from 'react'
import { Terms } from './const/Consttextterms';
import styles from './styles/Termsandconditions.module.scss';
import { Gettermsandconditions } from '../../services/termsandconditions-service/termsandconditions_services';
import ReactHtmlParser from "react-html-parser";
function Termsandconditions() {

    const [termscondition, setTermsconditions] = useState([]);
    useEffect(() => {
        const ids = 2;
        Gettermsandconditions(ids).then((res) => {
            setTermsconditions(res?.data);
           
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <Fragment>
            <div className={styles.maintermsandconditions}>
                <div className={styles.emptyrightsectionbox}>
                </div>
                <div className={styles.emptyleftsectionbox}>
                </div>
                <div className={styles.emptybottomsectionbox}></div>
                <div>
                <div className={styles.insidetermsandconditions}>
                {termscondition?.content ? <>{ReactHtmlParser(termscondition?.content.replace(/&lt;/g, "<"))}</> : null}

                    </div>
                </div>
                {/* <div className={styles.insidetermsandconditions}>
                    <div className="large-text mt-2 mb-2">
                        {Terms?.TermsandConditions}
                    </div>
                    <div className={styles.letterspaceterms}>
                        {Terms?.Termssection1}
                    </div>
                    <div className='large-text mt-4 mb-2'>{Terms?.IntendedUseofWebsite}</div>
                    <div className={styles.letterspaceterms}>
                        {Terms?.IntendedUseofWebsitesection1}

                        <div className="mt-3 mb-3">
                            {Terms?.IntendedUseofWebsitesection2}

                        </div>
                        <div className="mt-3 mb-2">
                            {Terms?.IntendedUseofWebsitesection3}

                        </div>
                    </div>
                    <div className='large-text mt-4 mb-2'>{Terms?.UserRegistration}</div>
                    <div className={styles.letterspaceterms}>
                        <div className="mt-3 mb-2">
                            {Terms?.UserRegistrationsection1}
                        </div>
                        <div className="mt-3 mb-2">
                            {Terms?.UserRegistrationsection2}

                        </div>
                        <div className="mt-3 mb-2">
                            {Terms?.UserRegistrationsection3}

                        </div>
                        <div className="mt-3 mb-2">
                            {Terms?.UserRegistrationsection4}

                        </div>
                    </div>
                    <div className='large-text mt-4 mb-2'>{Terms?.RegisteredAccountObligations}</div>
                    <div className={styles.letterspaceterms}>
                        <div className="mt-3 mb-2">
                            {Terms?.RegisteredAccountObligationssection1}
                        </div>
                        <div className="mt-3 mb-2">
                            {Terms?.RegisteredAccountObligationssection2}
                        </div>
                    </div>
                    <div className='large-text mt-4 mb-2'>{Terms?.ContentUseLimitations}</div>
                    <div className={styles.letterspaceterms}>
                        {Terms?.ContentUseLimitationssection1}
                    </div>
                    <div className='large-text mt-4 mb-2'>{Terms?.ProspectiveInvestorAccounts}</div>
                    <div className={styles.letterspaceterms}><div className="mt-3 mb-2">
                        {Terms?.ProspectiveInvestorAccountssection1}
                    </div>
                        <div className='mt-3 mb-2'>
                            {Terms?.ProspectiveInvestorAccountssection2}
                        </div>
                    </div>

                </div> */}
            </div>
        </Fragment>
    )
}

export default Termsandconditions