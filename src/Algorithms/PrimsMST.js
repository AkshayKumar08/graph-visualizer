var PriorityQueue = require('priorityqueuejs');

/**
 * Computes the minimum spanning tree (MST) of a graph using Prim's algorithm.
 * 
 * @param {object} graph - The graph represented as an adjacency list.
 * @returns {object} An object containing the minimum spanning tree, total weight of the MST, and the time taken to compute the MST.
 */
const primsMST = (graph) => {
    // Initialize a set to track visited vertices
    const visited = new Set();
    // Initialize a priority queue to store edges based on their weights
    const priorityQueue = new PriorityQueue((a, b) => b[2] - a[2]);
    // Start the algorithm from an arbitrary vertex (in this case, the first vertex in the graph)
    const startingVertex = graph.nodes[0];
    // Mark the starting vertex as visited
    visited.add(startingVertex);

    // Enqueue edges incident to the starting vertex into the priority queue
    for (const { destination, weight } of graph.adjecencyList[startingVertex]) {
        priorityQueue.enq([startingVertex, destination, weight]);
    }
    let total = 0;
    // Initialize an array to store the edges of the minimum spanning tree
    const minimumSpanningTree = [];
    const startTime = Date.now();

    // Continue the algorithm until the priority queue is empty or all vertices are visited
    while (priorityQueue.size() > 0 && visited.size < graph.nodeCount) {
        // Dequeue the edge with the minimum weight from the priority queue
        const [source, destination, weight] = priorityQueue.deq();
        // If the destination vertex is already visited, skip this edge
        if (visited.has(destination)) continue;
        // Mark the destination vertex as visited
        visited.add(destination);
        // Add the edge to the minimum spanning tree
        minimumSpanningTree.push([source, destination, weight]);
        // Update the total weight of the MST
        total += weight;
        // Enqueue edges incident to the destination vertex into the priority queue
        for (const { destination: neighbor, weight: w } of graph.adjecencyList[destination]) {
            // Skip vertices that are already visited 
            if (visited.has(neighbor)) continue;
            priorityQueue.enq([destination, neighbor, w]);
        }
    }
    const endTime = Date.now();
    const time = endTime - startTime;
    // Return the minmum spanning tree along with the total weight and time taken to compute the MST
    return {
        primsTime: time,
        minimumSpanningTree,
        totalWeight: total
    };
}

export default primsMST;