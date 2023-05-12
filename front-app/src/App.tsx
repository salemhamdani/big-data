import React from "react";
import "./App.css";
import LinearChart from "./components/LinearChart";
import ResponsiveAppBar from "./components/AppBar";
import AccommodationTable from "./components/AccommodationTable";
import { Typography } from "@mui/material";
import ErrorBoundary from "./components/ErrorBoundry";
import AveragesTable from "./components/Averagestable";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-body">
        <ResponsiveAppBar />
        <div className="chart-container">
          <LinearChart />
          <Typography variant="h3" sx={{ mt: 25 }}>
            Houses rent prices average per city
          </Typography>
          <AveragesTable />
          <Typography variant="h3" sx={{ mt: 10 }}>
            Houses rent list
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default App;
