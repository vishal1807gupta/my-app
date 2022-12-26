import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText] = useState('');
   
    // text = "new text"; wrong way to change the state
    // setText("new text"); correct way to change the state

    // function changeColor(){
    //      document.getElementById('btn').style.backgroundColor='blue';
    //      document.getElementById('btn').style.color='white';
    // }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success ");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success ");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    // function change(){
    //     handleUpClick();
    //     changeColor();
    // }
    const emailExtract = ()=>{
      let newText = text.split(" ");
      let news = "";
      newText.forEach(element => {
        if(element.endsWith('@gmail.com')){
          news+=(element+" ");
        }
      });
      setText(news);
      props.showAlert("Email Extracted","success ");
      
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" id="btn" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-1" id="btn2" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-1" id="btn3" onClick={emailExtract}>Extract Email</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>Your text summary</h1>
      <p>{text===''?'No':text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008*(text.split(" ").length-1)} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
