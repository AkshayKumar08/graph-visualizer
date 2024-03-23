import { useState } from "react";

import AlgorithmSelector from "./AlgorithmSelector";
import Button from "./Button";
import InputSize from "./InputSize";
import './InputSection.css';


/**
 * InputSection component renders input elements for selecting graph size and algorithm type.
 * @param {function} setNodeCount - Function to set the number of nodes in the graph.
 * @param {function} setSelectedAlgorithm - Function to set the selected algorithm for generating MST.
 * @param {function} setRenderCount - Function to trigger re-rendering of the visualizer component.
 * @returns {JSX.Element} InputSection component.
 */
const InputSection = ({ setNodeCount, setSelectedAlgorithm, setRenderCount }) => {
    // State variables to manage input values and selected options
    const [inputValue, setInputValue] = useState(10);
    const [selectedOption, setSelectedOption] = useState("Krushkal's");

    // Event handlers for input change
    const handleInputChange = (event) => setInputValue(event.target.value);
    const handleDropdownChange = (event) => setSelectedOption(event.target.value);

    // Event handler for button click

    const handleButtonClick = () => {
        const newNodeCount = parseInt(inputValue);
        // Set node count and selected algorithm based on input values
        setNodeCount(newNodeCount);
        setSelectedAlgorithm(selectedOption);

        // Increment render count to trigger re-rendering
        setRenderCount(prevCount => prevCount + 1);
    };

    return (
        <div className="input-section-container">
            <div className="input-section">
                <InputSize inputValue={inputValue} handleInputChange={handleInputChange} />
                <AlgorithmSelector options={[
                    { value: "Krushkal's", label: "Krushkal's" },
                    { value: "Prim's", label: "Prim's" },
                    { value: "Both", label: "Both" }
                ]}
                    value={selectedOption}
                    onChange={handleDropdownChange} />
                <Button buttonName={"Generate"} onClick={handleButtonClick} />
            </div>
        </div>
    );
}

export default InputSection;