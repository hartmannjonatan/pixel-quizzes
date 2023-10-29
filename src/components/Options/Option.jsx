import React, { useState } from 'react';

const Options = ({options, correct_answer, addCorrect, setAnswered}) => {
    const [answer, setAnswer] = useState(null)

    function verify_answer(index){
        setAnswer(index)
        setAnswered(true)
        if(index == correct_answer && answer == null){
            addCorrect()
        }
    }

    return (
        <div className='options'>
            {options.map((option, i) => (
                <button key={i+1} onClick={() => {verify_answer(i+1)}} className={i+1 == answer ? (answer==correct_answer ? 'option option-selected option-correct' : 'option option-selected option-incorrect') : "option"} disabled={answer != i+1 && answer != null}>
                    <span className='index-option'>{String.fromCharCode(i + 65).toUpperCase()}.</span>
                    <span className="text-option">{option}</span>
                </button>
            ))}
        </div>
    );
}

export default Options;
