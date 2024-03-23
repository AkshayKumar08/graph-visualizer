import './Button.css'; 

const Button = ({ buttonName, onClick }) => {
    return (
        <button className="custom-button" onClick={onClick}>
            {buttonName}
        </button>
    );
}

export default Button;
