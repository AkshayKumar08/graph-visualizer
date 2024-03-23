import { useState } from "react";

import './App.css';
import InputSection from './GraphInput/InputSection';
import Visualizer from './GraphOutput/Visualizer';

function App() {
  const [nodeCount, setNodeCount] = useState(10);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("Krushkal's");
  const [renderCount, setRenderCount] = useState(0);

  return (
    <div className="mst">
      <InputSection setNodeCount={setNodeCount} setSelectedAlgorithm={setSelectedAlgorithm} setRenderCount={setRenderCount} />
      <Visualizer nodeCount={nodeCount} selectedAlgorithm={selectedAlgorithm} renderCount={renderCount} />
    </div>
  );
}

export default App;
