import styles from './Button.module.scss'

interface ButtonProps {
    soldOut: boolean,
    isSelected: boolean,
    children: any,
    selected: any,
    mobile: boolean,
    onClick: (selected: any) => Promise<void>
}

const Button:React.FC <ButtonProps> = ({children, soldOut, isSelected, onClick, selected, mobile}) => (
    mobile ?
      <div className={soldOut || !isSelected ? styles.mobileSoldOutButton : styles.mobileButtonContainer}
              onClick={() => onClick(selected)}>
          <p>{children}</p>
      </div>
    :
      <div className={`${styles.buttonContainer} ${soldOut || !isSelected ? styles.soldOut : ''}`}
          onClick={() => onClick(selected)}>
          <p>{children}</p>
      </div>
);


export default Button;
