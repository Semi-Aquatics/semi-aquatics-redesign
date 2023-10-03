import { Dispatch, useState } from 'react';
import styles from './PasswordWall.module.scss'
import { useDispatch } from 'react-redux';
import { setPasswordGuessed } from '../../redux/user/user.actions';
import EmailForm from '../email-form/email-form.component';
import Form from '../form/form.component';

interface PasswordWallProps {
  images: string[]
}

const PasswordWall: React.FC<PasswordWallProps> = ({ images }) => {
  const [currentGuess, setCurrentGuess] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handlePasswordGuess = (e: any) => {
    if (currentGuess === process.env.WEBSITE_LOCK_PASSWORD) {
      dispatch(setPasswordGuessed(currentGuess));
    } else {
      setErrorMessage('Incorrect password');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  }

  return (
    <div className={styles.PasswordWallContainer}>
      <div className={styles.emailFormContainerPW}>
        <div className={styles.emailFormContainerPWInner}>
          <p>Available October 9th at 6:00 pm est.</p>
          <p>Join our email list for exclusive discounts and early access codes.</p>
          <EmailForm isSidebar={false} placeholder={'enter email'} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        {
          images.map((image, index) => (
            <img key={index} src={image} alt={`product preview images ${index}`}/>
            ))
          }
      </div>
      <div className={styles.emailFormContainerPW}>
        <div className={styles.emailFormContainerPWInner}>
          <p>Enter password to continue to drop:</p>
          <Form placeholder={'enter password'} handleSubmit={handlePasswordGuess} value={currentGuess} setValue={setCurrentGuess}/>
          <p className={styles.errorMessage}>{errorMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordWall;
