import krushkalMST from "./KrushkalMST";
import primsMST from "./PrimsMST";

/**
 * Function to find minimum spanning tree using both Kruskal's and Prim's algorithms.
 * 
 * @param {Graph} connectedGraph - The input graph represented as an Graph with nodes, edges and adjecencyList.
 * @returns {Object} An object containing the minimum spanning tree computed by Kruskal's and Prim's algorithms, along with their respective execution times.
 */
const bothMST = (connectedGraph) => {
    // Compute minimum spanning tree using Kruskal's algorithm
    const krushkal = krushkalMST(connectedGraph);
    
    // Compute minimum spanning tree using Prim's algorithm
    const prims = primsMST(connectedGraph);
    
    // Return the minimum spanning trees computed by both algorithms along with their execution times
    return {
        krushkalTime: krushkal.krushkalTime,
        primsTime: prims.primsTime,
        minimumSpanningTree: krushkal.minimumSpanningTree // Both Kruskal's and Prim's algorithms produce the same minimum spanning tree(assumption)
    }
}

export default bothMST;