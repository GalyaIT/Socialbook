import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import store from "./store/ReduxStore";
import App from "./App";

// ReactDOM.render(
//   <App/>,
//   document.getElementById("root")
// );


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path ="*" element={<App />}/>
        </Routes>
        </BrowserRouter>        
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import App from "./App";
// import store from "./store/ReduxStore";




// ReactDOM.render(
//   <Provider store={store}>
//       {/* <BrowserRouter>
//         <Routes>
//           <Route path="*" element={<App />} />
//         </Routes>
//       </BrowserRouter> */}
//       <App/>
//   </Provider>,
//   document.getElementById("root")
// );