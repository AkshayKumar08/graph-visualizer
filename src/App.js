import './App.css';
import InputSection from './GraphInput/InputSection';
import TimeComplexity from './GraphOutput/TimeComplexity';
import Visualizer from './GraphVisualization/Visualizer';

function App() {
  return (
    <div className="mst">
      <InputSection />
      <Visualizer nodeCount={10} />
      <TimeComplexity time={10}/>
    </div>
  );
}

export default App;
