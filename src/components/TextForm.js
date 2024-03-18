import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpperClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLowerClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick=()=>{
        setText('');
        props.showAlert("Text has been clear!","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const[text,setText]=useState('');
  return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Enter your text below: </label>
                <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white'}}></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpperClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowerClick}>Convert to Lowercase</button>
            <button className='btn btn-danger mx-2' onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length} minitues read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
    
  )
}
