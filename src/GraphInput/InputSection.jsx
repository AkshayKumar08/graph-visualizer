import AlgorithmSelector from "./AlgorithmSelector";
import Button from "./Button";
import InputSize from "./InputSize";

const InputSection = () => {
    return (
        <>
            <InputSize />
            <AlgorithmSelector />
            <Button name="Generate" />
        </>
    );
}

export default InputSection;