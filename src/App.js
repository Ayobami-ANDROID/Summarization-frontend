import Header from "./Components/header/Header";
import SummarizerComponent from "./Components/Summarize/summarize";
import Classify from "./Components/Classify/Classify";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<SummarizerComponent/>}/>
        <Route   path="/classify" element={<Classify/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
