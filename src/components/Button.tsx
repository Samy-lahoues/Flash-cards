interface buttonProps {
    text : string,
    onClick : () => void;
}
const Button = ({text, onClick} : buttonProps) => {
    return (
        <button onClick={onClick} >
            <span>{text}</span>
        </button>
    )
}
export default Button;