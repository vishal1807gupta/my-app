// import logo from './logo.svg';
import About from "./About";
import { useState } from "react";
import Alert from "./Alert";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./TextForm";

import { BrowserRouter, Routes, Route} from "react-router-dom";

// let name = "Vishal";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [newText, setNewText] = useState("");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  setInterval(() => {
    document.title = "TextUtils is amazing";
  }, 2000);
  setInterval(() => {
    document.title = "Install TextUtils now";
  }, 1000);
  const toggleMode = () => {
    if (mode !== "light") {
      setMode("light");
      setNewText("");
      showAlert("Light Mode has been Enabled ", "success ");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      setNewText("text-light");
      showAlert(`Dark Mode has been Enabled `, "success ");
      document.body.style.backgroundColor = "#042743";
    }
  };
  const toggleMode2 = () => {
    setMode("dark");
    setNewText("text-light");
    showAlert(`Yellow Mode has been Enabled `, "success ");
    document.body.style.backgroundColor = "rgb(201, 204, 43)";
  };
  const toggleMode3 = () => {
    setMode("dark");
    setNewText("text-light");
    showAlert(`Purple Mode has been Enabled `, "success ");
    document.body.style.backgroundColor = "purple";
  };
  const toggleMode4 = () => {
    setMode("dark");
    setNewText("text-light");
    showAlert(`Red Mode has been Enabled `, "success ");
    document.body.style.backgroundColor = "red";
  };
  return (
    // <>
    // {/* JSX Fragment */}
    // <h1>This is me.</h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React With Vishal
    //     </a>
    //   </header>
    // </div>
    // </>

    // <>
    // <nav>
    // <li>Home</li>
    // <li>About</li>
    // <li>Contact</li>
    // </nav>
    // <img src="" alt=""/>
    // <div className="container">
    //   <h1>Hello {name}</h1>
    //   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo harum ea, rerum deleniti quasi voluptatum explicabo ad. Libero possimus nam cupiditate similique cum sit doloribus, animi eligendi laborum accusamus qui mollitia, error, vitae minima!</p>
    // </div>
    // </>

    <>
      {/* <Navbar title="TextUtils2" aboutText="About TextUtils"/> props */}
      {/* <Navbar/> */}

      <BrowserRouter>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          toggleMode2={toggleMode2}
          toggleMode3={toggleMode3}
          toggleMode4={toggleMode4}
          newText={newText}
        />
        <Alert alert={alert} />
        <div className="container my-3 py-3">
          <Routes>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/" 
              element =
              {
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }/>
          </Routes>
          {/* <About/>*/}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
