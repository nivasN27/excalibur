import styles from "./less/contactme.module.less";
import avatar from "../assets/images/app/avatar.webp";
import { useState } from "react";

const ContactMe = () => {
  const [showFeedback, setShowFeedback] = useState(true);

  const handleSubmit = () => {
    setShowFeedback(!showFeedback)
  }
  return (
    <>
      <div className={styles.contactContainer}>
        <img src={avatar} className={styles.avatar} />
        <div>
          <p className={styles.contactNumber}>
            Contact : <span>+91 96551 15013</span>
          </p>
          <p className={styles.contactNumber}>
            E-mail : <span>nivashnandha2002@gmail.com</span>
          </p>
        </div>
        <button
          className={styles.feedBackBtn}
          onClick={() => setShowFeedback(true)}
        >
          feedback
        </button>
      </div>
      {showFeedback && (
        <div className={styles.feedBackWrapper}>
          <div className={styles.feedBackContainer}>
            <div className={styles.individualInput}>
              <label>E-mail</label>
              <input />
            </div>
            <div className={styles.individualInput}>
              <label>comment</label>
              <textarea />
            </div>
            <div className={styles.btnContainer}>
              <button
                className={styles.cancelBtn}
                onClick={() => setShowFeedback(!showFeedback)}
              >
                cancel
              </button>
              <button
                disabled = {false}
                className={styles.formSubmit}
                onClick={() => handleSubmit()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ContactMe;
