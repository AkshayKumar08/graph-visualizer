const DisjointSet = require("../DataStructure/DisjointSet");

/**
 * Function to find the minimum spanning tree using Kruskal's algorithm.
 * 
 * @param {Graph} graph - The input graph represented as an Graph with nodes, edges and adjecencyList.
 * @returns {Object} An object containing the minimum spanning tree, total weight, and execution time.
 */
const krushkalMST = (graph) => {
    // Get all edges from the graph
    const edges = [];
    for (const source in graph.adjecencyList) {
        for (const { destination, weight } of graph.adjecencyList[source]) {
            edges.push([source, destination, weight]);
        }
    }

    // Sort edges by weight in non-decreasing order
    edges.sort((a, b) => a[2] - b[2]);

    // Initialize total weight of minimum spanning tree and the tree itself
    let total = 0;
    const minimumSpanningTree = [];

    // Initialize disjoint set data structure to track connected components
    const disjointSet = new DisjointSet(Object.keys(graph.adjecencyList).length);

    // Start timer
    const startTime = Date.now();

    // Iterate over sorted edges
    for (var [source, destination, weight] of edges) {
        source = parseInt(source);
        destination = parseInt(destination);
        weight = parseInt(weight);

        // If adding the edge doesn't create a cycle, add it to the minimum spanning tree
        if (disjointSet.union(source, destination)) {
            minimumSpanningTree.push([source, destination, weight]);
            total += weight;
        }
    }

    // Stop timer
    const endTime = Date.now();
    const time = endTime - startTime;

    // Return minimum spanning tree, total weight, and execution time
    return {
        krushkalTime: time,
        minimumSpanningTree,
        totalWeight: total
    };
}

module.exports = krushkalMST;
