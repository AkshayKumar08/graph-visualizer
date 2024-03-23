import './InputSize.css';

/**
 * InputSize component renders an input field for specifying the graph size.
 * @param {string} inputValue - Value of the input field.
 * @param {function} handleInputChange - Function to handle input change events.
 * @returns {JSX.Element} InputSize component.
 */
const InputSize = ({ inputValue, handleInputChange }) => {
    return (
        <div className="input-container">
            <label htmlFor="graph-size" className="input-label">Graph Size: &nbsp; &nbsp;</label>
            <input id="graph-size" type="text" className="input-field" onChange={handleInputChange} value={inputValue}/>
        </div>
    );
};

export default InputSize;
