import React from "react";
import ReactDOM from "react-dom";
import "../src/style.css";
import { BrowserRouter} from "react-router-dom";

function App() {
  return <>
  <BrowserRouter>
  <h1>Hello World!</h1>
  </BrowserRouter>
  </>
}

ReactDOM.render(<App />, document.getElementById("root"));
