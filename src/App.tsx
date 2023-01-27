import React, {ChangeEvent, useState,KeyboardEvent} from 'react';
import './App.css';


type ArrayType = {
    value: string
}

function App() {
    const [array, setArray] = useState<ArrayType[]>([])
    const [value, setValue] = useState<string>("")


    let sendHandler = () => {
        let newElement = {value: value}
        setArray([...array, newElement])
    }
    let clearHandler = () => {
        setValue("")
    }
    let deleteHandler = () => {
        array.pop()
        setArray([...array])
    }
    let inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    let knopkaHandler = (e:KeyboardEvent<HTMLInputElement>)=>{
        if (e.ctrlKey && e.key === "Enter"){
            let newElement = {value: value}
            setArray([...array, newElement])
            setValue("")
        }
    }

    return <div>
        <input onKeyDown={knopkaHandler} value={value} onChange={inputHandler}/>
        <button onClick={sendHandler}>send</button>
        <button onClick={clearHandler}>clear</button>
        <button onClick={deleteHandler}>delete last message</button>
        <ul>
            {array.map(a => <li>{a.value}</li>)}
        </ul>
    </div>
}

export default App;
