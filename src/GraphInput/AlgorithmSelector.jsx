import React from 'react';
import './AlgorithmSelector.css';

/**
 * AlgorithmSelector component allows users to select graph type from a dropdown.
 * @param {Object} options - Array of options for the dropdown.
 * @param {string} value - Currently selected value.
 * @param {function} onChange - Function to handle onChange event.
 * @returns {JSX.Element} AlgorithmSelector component.
 */
const AlgorithmSelector = ({ options, value, onChange }) => {
    return (
        <div className="selector-container">
            <label htmlFor="graph-type" className="selector-label">Graph Type: &nbsp;</label>
            <select id="graph-type" value={value} onChange={onChange} className="selector-dropdown">
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

export default AlgorithmSelector;
