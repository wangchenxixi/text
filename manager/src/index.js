import dva from 'dva';
import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import { version, Button } from "antd";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.render(
  <div className="App">
    <h1>Please fork this codesandbox to reproduce your issue.</h1>
    <div>Current antd version: {version}</div>
    <div style={{ marginTop: "16px" }}>
      <Button type="primary">Example button</Button>
    </div>
  </div>,
  document.getElementById("root")
);

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
