import { useState } from "react";

import AlgorithmSelector from "./AlgorithmSelector";
import Button from "./Button";
import InputSize from "./InputSize";
import './InputSection.css';


const InputSection = ({ setNodeCount, setSelectedAlgorithm, setRenderCount }) => {

    const [inputValue, setInputValue] = useState(10);
    const [selectedOption, setSelectedOption] = useState("Krushkal's");

    const handleInputChange = (event) => setInputValue(event.target.value);
    const handleDropdownChange = (event) => setSelectedOption(event.target.value);

    const handleButtonClick = () => {
        const newNodeCount = parseInt(inputValue);
        setRenderCount(prevCount => prevCount+1);
        setNodeCount(newNodeCount);
        setSelectedAlgorithm(selectedOption);
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