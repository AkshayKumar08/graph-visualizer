import { useState, useEffect } from "react";
import { ForceGraph2D } from 'react-force-graph';

import ConnectedGraph from "../DataStructure/Graph";
import krushkalMST from "../Algorithms/KrushkalMST";
import primsMST from "../Algorithms/PrimsMST";
import bothMST from "../Algorithms/bothMST";
import TimeTable from "./TimeTable";
import './Visualizer.css';


/**
 * Visualizer component displays the minimum spanning tree visualized using ForceGraph2D,
 * along with the runtime of Kruskal's and Prim's algorithms in a TimeTable.
 * @param {number} nodeCount - Number of nodes in the graph.
 * @param {string} selectedAlgorithm - Selected algorithm ("Krushkal's", "Prim's", or "Both").
 * @param {number} renderCount - Counter to trigger re-render when updated.
 * @returns {JSX.Element} Visualizer component.
 */
const Visualizer = ({ nodeCount, selectedAlgorithm, renderCount }) => {
    const [graphData, setGraphData] = useState(null);
    const [kTime, setKTime] = useState(0);
    const [pTime, setPTime] = useState(0);

     /**
     * Function to generate minimum spanning tree based on selected algorithm.
     * @param {object} connectedGraph - Instance of ConnectedGraph representing the graph.
     * @returns {object} Object containing Kruskal's or Prim's MST and runtime.
     */
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
        // Generate connected graph and compute MST and runtime when renderCount changes
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
