import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

/**
 * Access "test" method from src/main/index.ts
 */
// const remote = require("@electron/remote");
// const tests = remote.getGlobal("test");
// console.log(tests());

/**
 * Access node modules
 */
// const fs = require("fs");
// console.log(fs);

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>
, document.getElementById("root"));
