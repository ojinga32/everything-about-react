import { useState } from "react";
import useInput from "../hooks/useInput";

function HookExam() {

    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    const state = useState();

    return ( 
        <div>
            <input value={input} onChange={onChange} />
            <input value={input2} onChange={onChange2} />
        </div>
     );
}

export default HookExam;