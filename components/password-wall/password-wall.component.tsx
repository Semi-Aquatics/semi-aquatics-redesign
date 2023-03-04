import { Dispatch, useState } from 'react';
import styles from './PasswordWall.module.scss'
import { useDispatch } from 'react-redux';
import { setPasswordGuessed } from '../../redux/user/user.actions';

interface PasswordWallProps {
  images: string[]
}

const PasswordWall: React.FC<PasswordWallProps> = ({ images }) => {
  const [currentGuess, setCurrentGuess] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handlePasswordGuess = (e: any) => {
    e.preventDefault();
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
      <div className={styles.imageContainer}>
        {
          images.map((image, index) => (
            <img key={index} src={image} alt={`product preview images ${index}`}/>
          ))
        }
      </div>
      <p>Enter password to continue to drop:</p>
      <div className={styles.inputContainer}>
        <input type="text" value={currentGuess} onChange={(e => setCurrentGuess(e.target.value))} onKeyUp={(e) => e.key === 'Enter' && handlePasswordGuess(e)}/>
        <button className={styles.submitBtn} onClick={(e) => handlePasswordGuess(e)}>Continue</button>
      </div>
      <p className={styles.errorMessage}>{errorMessage}</p>
    </div>
  );
};

export default PasswordWall;
