import React, { useState, useRef, useEffect, ChangeEvent } from 'react'

interface Propsiki {
    type: string;
    placeholder: string;
    required?: boolean;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<Propsiki>= ({placeholder, required, type, handleChange}) => {
    const [count, setCount] = useState<{ text: string}>({ text: 'hell'});
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        console.log(inputRef.current)
        console.log(divRef.current)
    }, [])
    return (
        <div ref={divRef}>
            <p>{count.text}</p>
           <input onChange={handleChange} ref={inputRef} type={type} placeholder={placeholder} required={required}/> 
        </div>
    )
}

export default TextField
