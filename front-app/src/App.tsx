import React from "react";
import "./App.css";
import LinearChart from "./components/LinearChart";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-body">
        <div className="container">
          <LinearChart />
        </div>
      </div>
    </div>
  );
}

export default App;
