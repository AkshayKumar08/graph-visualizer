import './InputSize.css';

const InputSize = ({ inputValue, handleInputChange }) => {
    return (
        <div className="input-container">
            <label htmlFor="graph-size" className="input-label">Graph Size: &nbsp; &nbsp;</label>
            <input id="graph-size" type="text" className="input-field" onChange={handleInputChange} value={inputValue}/>
        </div>
    );
};

export default InputSize;
