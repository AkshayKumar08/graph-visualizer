
var PriorityQueue = require('priorityqueuejs');


const primsMST = (graph) => {
    const visited = new Set();
    const priorityQueue = new PriorityQueue((a, b) => b[2] - a[2]);
    const startingVertex = graph.nodes[0];
    visited.add(startingVertex);

    for (const { destination, weight } of graph.getAdjecencyList()[startingVertex]) {
        priorityQueue.enq([startingVertex, destination, weight]);
    }
    let total = 0;
    const minimumSpanningTree = [];
    while (priorityQueue.size() > 0 && visited.size < graph.nodeCount) {
        const [ source, destination, weight ] = priorityQueue.deq();
        if (visited.has(destination)) continue;
        minimumSpanningTree.push({ source, destination, weight });
        total += weight;
        visited.add(destination);
        for (const { destination: neighbor, weight: w } of graph.getAdjecencyList()[destination]) {
            if(visited.has(neighbor)) continue;
            priorityQueue.enq([destination, neighbor, w]);
        }
    }

    console.log("Prim's MST", total);
    console.log(minimumSpanningTree);

    return minimumSpanningTree;
}

export default primsMST;