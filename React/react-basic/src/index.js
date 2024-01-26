//项目的入口

//React 必要的两个包
import React from "react";
import ReactDOM from "react-dom/client";

//导入根组件
import App from "./App";

//把APP根组件渲染到id为root的div中
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
