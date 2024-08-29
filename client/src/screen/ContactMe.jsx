import styles from './less/contactme.module.less'
import avatar from '../assets/images/app/avatar.webp';
import { useState } from 'react';

const ContactMe = () => {
    const [showFeedback, setShowFeedback] = useState(false);
    return (
        <>
            <div className={styles.contactContainer}>
                <img src={avatar} className={styles.avatar} />
                <div>
                    <p className={styles.contactNumber}>Contact : <span>+91 9655115013</span></p>
                    <p className={styles.contactNumber}>E-mail : <span>nivashnandha2002@gmail.com</span></p>
                </div>
                <button className={styles.feedBackBtn} onClick={() => setShowFeedback(true)}>feedback</button>
            </div>
            {
                showFeedback && (
                    <div>

                    </div>
                )
            }
        </>
    );
}
export default ContactMe;