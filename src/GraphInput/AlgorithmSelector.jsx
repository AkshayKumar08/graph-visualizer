import React from 'react';
import './AlgorithmSelector.css';

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
