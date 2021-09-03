import styles from './Button.module.scss'

interface ButtonProps {
    soldOut: boolean,
    isSelected: boolean
}

const Button:React.FC <ButtonProps> = ({children, soldOut, isSelected}) => (
    <div className={soldOut || !isSelected ? styles.soldOutButton : styles.buttonContainer}>
        <p>{children}</p>
    </div>
);


export default Button;