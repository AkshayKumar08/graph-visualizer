import { useState, useEffect } from "react";
import { ForceGraph2D } from 'react-force-graph';

import ConnectedGraph from "../DataStructure/Graph";
import krushkalMST from "../Algorithms/KrushkalMST";
import primsMST from "../Algorithms/PrimsMST";
import bothMST from "../Algorithms/bothMST";
import TimeTable from "./TimeTable";
import './Visualizer.css';


const Visualizer = ({ nodeCount, selectedAlgorithm, renderCount }) => {
    const [graphData, setGraphData] = useState(null);
    const [kTime, setKTime] = useState(0);
    const [pTime, setPTime] = useState(0);

    const generateMST = (connectedGraph) => {
        if (selectedAlgorithm === "Krushkal's") {
            return krushkalMST(connectedGraph);
        }
        if (selectedAlgorithm === "Prim's") {
            return primsMST(connectedGraph);
        }
        return bothMST(connectedGraph);
    }

    useEffect(() => {
        const connectedGraph = new ConnectedGraph(nodeCount);
        const { krushkalTime, primsTime, minimumSpanningTree } = generateMST(connectedGraph);
        const nodes = connectedGraph.transformNodeToReactNodes(connectedGraph.nodes) || [];
        const links = connectedGraph.transformedtoReactEdges(minimumSpanningTree) || [];
        setKTime(krushkalTime);
        setPTime(primsTime);
        setGraphData({ nodes, links });
    }, [renderCount]);

    return (
        <>
            <TimeTable krushkalTime={kTime} primsTime={pTime} />

            < div className="graph-container">
                {
                    graphData !== null &&
                        graphData.nodes !== null &&
                        graphData.links !== null ?
                        <ForceGraph2D graphData={graphData} />
                        : "Loading"
                }
            </div >

        </>
    );
}

export default Visualizer;
