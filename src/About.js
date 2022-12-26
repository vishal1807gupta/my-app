import React,{useState} from 'react'

export default function About() {

    const[myStyle,setMyStyle]=useState({
        color: 'black',
        backgroundColor : 'white'
    });
    const[btnText,setBtnText] = useState("Enable Dark Mode");
    
    const toggleStyle = ()=>{
        if(myStyle.color==='white'){
            setMyStyle({
                color: 'black',
                backgroundColor : 'white'
            });
            setBtnText("Enable Dark Mode");
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor : 'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode");
        }
    }

  return (

    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button"  style={myStyle}
                data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show"
            area-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                    <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolor.</strong>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex neque, voluptates praesentium pariatur quo vero provident expedita atque dolorum maiores cum enim odio dolore cumque. Error quod atque laudantium, reprehenderit tempore corrupti qui alias! Incidunt deserunt eveniet, odit dignissimos nihil eaque itaque? Omnis, dolores. Quasi temporibus dolore hic ut molestias.<code>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis.</code>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button"  style={myStyle}
                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse"
            area-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                    <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolor.</strong>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex neque, voluptates praesentium pariatur quo vero provident expedita atque dolorum maiores cum enim odio dolore cumque. Error quod atque laudantium, reprehenderit tempore corrupti qui alias! Incidunt deserunt eveniet, odit dignissimos nihil eaque itaque? Omnis, dolores. Quasi temporibus dolore hic ut molestias.<code>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis.</code>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button"  style={myStyle}
                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse"
            area-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                    <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolor.</strong>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex neque, voluptates praesentium pariatur quo vero provident expedita atque dolorum maiores cum enim odio dolore cumque. Error quod atque laudantium, reprehenderit tempore corrupti qui alias! Incidunt deserunt eveniet, odit dignissimos nihil eaque itaque? Omnis, dolores. Quasi temporibus dolore hic ut molestias.<code>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis.</code>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </div>
        </div>
      </div>
      <div className="container my-3">
      <button type="button" className="btn btn-primary" onClick={toggleStyle} >{btnText}</button>
      </div>
    </div>
  )
}
