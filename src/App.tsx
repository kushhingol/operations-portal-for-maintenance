import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes } from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
