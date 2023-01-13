import React, { Fragment } from 'react'
import { Terms } from './const/Consttextterms';
import styles from './styles/Termsandconditions.module.scss';
function Termsandconditions() {
    return (
        <Fragment>
            <div className={styles.maintermsandconditions}>
                <div className={styles.emptyrightsectionbox}>
                </div>
                <div className={styles.emptyleftsectionbox}>
                </div>
                <div className={styles.emptybottomsectionbox}></div>
                <div className={styles.insidetermsandconditions}>
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

                </div>
            </div>
        </Fragment>
    )
}

export default Termsandconditions