import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
 const [inProgress, setInProgress] = React.useState(false);
 React.useEffect(() => {
  setInProgress(true);
 }, []);
 return (
  <>
   <ProgressBar seconds={8} inProgress={inProgress} />
  </>
 );
}

function ProgressBar({ seconds, inProgress }) {
 return (
  <div className="ProgressBar">
   <div
    className="ProgressBar__Progress"
    style={{
     transition: `ease-in-out ${seconds}s width`,
     width: inProgress ? "100%" : "0%"
    }}
   />
  </div>
 );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
