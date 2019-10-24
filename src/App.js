import React from "react";
import ironhacklogo from "./ironhacklogo.svg";
import menutop from "./menutop.svg";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import Title from "./components/Title";
import Button from "./components/Button";
import Box from "./components/Box";

import "./App.css";

function App() {
  return (
    <div>
      <div className="background">
        <div className="flex-container-logo">
          <div>
            <img src={ironhacklogo} className="App-logo" alt="logo" />
          </div>
          <div>
            <img src={menutop} className="App-logo" alt="menu" />
          </div>
        </div>

        <Title />
        <Button />
      </div>
      <div className="box">
        <Box
          title="Declarative"
          paragraph="React makes it painless to create interactive UIs."
          img={icon1}
        />
        <Box
          title="Components"
          paragraph="Build encapsulated components that manage their state."
          img={icon2}
        />
        <Box
          title="Single-way"
          paragraph="A set of immutable values are passed to the component's."
          img={icon3}
        />
        <Box
          title="JSX"
          paragraph="Statically typed, designed to run on modern browsers."
          img={icon4}
        />
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
