import React, {useState} from 'react'
// import PropTypes from 'prop-types'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText);
  }


  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3" >
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? '#212529' : 'white', color: props.mode === 'dark'? 'white' : 'black'}} id="myBox" rows="8" ></textarea>
    </div>
    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=> {return element.length !==0}).length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").filter((element)=> {return element.length !==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Nothing to preview"}</p>
    </div>

    </>
  )
}
