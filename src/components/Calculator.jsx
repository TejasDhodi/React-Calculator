import React, { useState } from 'react'
import "../index.css"
const Calculator = () => {
    const [input, setInput] = useState("")
    return (
        <>
            <div className="calc_conatainer">
                <form className="calc">
                    <div className="input_container">
                        <input type="text" name="" id="" className="input" value={input}/>
                    </div>
                    <div className="buttons_body">
                        <div className="btn">
                            <input type='button' value='AC' className="actions md" onClick={() => setInput("")} />
                            <input type='button' value='%' className="actions" onClick={(e) => setInput(input + e.target.value)} />
                            <input type='button' value='/' className="actions" onClick={(e) => setInput(input + e.target.value)} />
                        </div>
                        <div className="btn">
                            <input type='button' value='7' className="actions" onClick={(e) => setInput(input + e.target.value)} />
                            <input type='button' value='8' className="actions" onClick={(e) => setInput(input + e.target.value)} />
                            <input type='button' value='9' className="actions" onClick={(e) => setInput(input + e.target.value)} />
                            <input type='button' value='*' className="actions" onClick={(e) => setInput(input + e.target.value)} />
                        </div>
                        <div className="btn">
                            <input type='button' value='6' className="actions" onClick={(e) => setInput(input + e.target.value)} />
                            <input type='button' value='5' className="actions" onClick={(e) => setInput(input + e.target.value)} />
                            <input type='button' value='4' className="actions" onClick={(e) => setInput(input + e.target.value)} />
                            <input type='button' value='-' className="actions" onClick={(e) => setInput(input + e.target.value)} />
                        </div>
                        <div className="btn">
                            <input type='button' value='3' className="actions" onClick={(e) => setInput(input + e.target.value)} />
                            <input type='button' value='2' className="actions" onClick={(e) => setInput(input + e.target.value)} />
                            <input type='button' value='1' className="actions" onClick={(e) => setInput(input + e.target.value)} />
                            <input type='button' value='+' className="actions" onClick={(e) => setInput(input + e.target.value)} />
                        </div>
                        <div className="btn">
                            <input type='button' value='0' className="actions lg" onClick={(e) => setInput(input + e.target.value)} />
                            <input type='button' value='=' className="actions" onClick={(e) => setInput(eval)} />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Calculator
