
const InputData = ({inputChange, inputValue}) => {

    return (
        <div>
            <input type ="text" value = {inputValue} onChange={inputChange}/>
        </div>
    );
};

export default InputData;