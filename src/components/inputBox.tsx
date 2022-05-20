import React, {useState} from "react";

const InputBox = () => {
    const [input, setInput] = useState('');
    const [code , setCode] = useState('');

    const onSubmit = () => {
        console.log(input);
    }
    return (
        <div>
            <textarea value={input} onChange={(e) => setInput(e.target.value)}></textarea>
            <button onClick={onSubmit}>Submit</button>
            <div>{code}</div>
        </div>
    )
}

export default InputBox;