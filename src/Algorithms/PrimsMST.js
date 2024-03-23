var PriorityQueue = require('priorityqueuejs');


const primsMST = (graph) => {
    const visited = new Set();
    const priorityQueue = new PriorityQueue((a, b) => b[2] - a[2]);
    const startingVertex = graph.nodes[0];
    visited.add(startingVertex);

    for (const { destination, weight } of graph.adjecencyList[startingVertex]) {
        priorityQueue.enq([startingVertex, destination, weight]);
    }
    let total = 0;
    const minimumSpanningTree = [];
    const startTime = Date.now();

    while (priorityQueue.size() > 0 && visited.size < graph.nodeCount) {
        const [ source, destination, weight ] = priorityQueue.deq();
        if (visited.has(destination)) continue;
        visited.add(destination);
        minimumSpanningTree.push([ source, destination, weight ]);
        total += weight;
        for (const { destination: neighbor, weight: w } of graph.adjecencyList[destination]) {
            if(visited.has(neighbor)) continue;
            priorityQueue.enq([destination, neighbor, w]);
        }
    }
    const endTime = Date.now();
    const time = endTime - startTime;
    return {
        primsTime: time,
        minimumSpanningTree,
        totalWeight: total
    };
}

export default primsMST;