import { useState, useEffect } from "react";
import ConnectedGraph from "../DataStructure/Graph";
import Krushkal from "../Algorithms/KrushkalMST";
import primsMST from "../Algorithms/PrimsMST";

const Visualizer = (props) => {
        
    const [graph, setGraph] = useState(null);
    const [minimumSpanningTreeEdges, setMinimumSpanningTreeEdges] = useState([]);

    useEffect(() => {
        const connectedGraph = new ConnectedGraph(props.nodeCount);
        setGraph(connectedGraph);
        
    }, []);

    useEffect(() => {
        if(graph == null) return ;
        Krushkal(graph);
        const minimumSpanningTree = primsMST(graph);
        setMinimumSpanningTreeEdges(minimumSpanningTree);
    }, [graph]);

    return (
        <>
        <div>{graph === null ? "Loading": JSON.stringify(graph)}</div>
        <div>{minimumSpanningTreeEdges === null? "loading": JSON.stringify(minimumSpanningTreeEdges)}</div>
        </>
    );
}

export default Visualizer;
