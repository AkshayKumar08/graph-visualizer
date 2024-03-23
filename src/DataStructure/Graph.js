import Graph from 'graphology';
import erdosRenyi from 'graphology-generators/random/erdos-renyi';

/**
 * Class representing a connected graph generator.
 */
class ConnectedGraph {
    /**
    * Create a connected graph with the given number of nodes.
    * @param {number} nodeCount - The number of nodes in the graph.
    */
    constructor(nodeCount) {
        // Initialize properties
        this.nodeCount = nodeCount;
        this.graph = this.generateConnectedGraph(nodeCount);
        this.nodes = this.graph.nodes();
        this.adjecencyList = this.formatAdjecencyList(this.graph);
    }

    /**
     * Generate a connected graph using the Erdős–Rényi model.
     * @param {number} nodeCount - The number of nodes in the graph.
     * @returns {Graph} - The generated graph.
     */
    generateConnectedGraph(nodeCount) {
        // Adjust probability based on node count
        const probability = (nodeCount < 100) ? 0.5 : 0.2;
        let graph;
        // Generate random graph until it is connected
        do {
            graph = erdosRenyi(Graph, { order: nodeCount, probability });
        } while (!this.isConnected(graph));

        // Assign random weights to edges
        graph.forEachEdge((edge, attributes, source, destination) => {
            if (source > destination) return;
            graph.setEdgeAttribute(source, destination, 'weight', Math.floor(Math.random() * 100) + 1);
        });

        return graph;
    }

    /**
     * Transform an array of nodes into React-compatible nodes.
     * @param {array} originalArray - The original array of nodes.
     * @returns {array} - The transformed array of React-compatible nodes.
     */
    transformNodeToReactNodes = (originalArray) => originalArray.map((value, index) => {
        return { id: index.toString(), name: value };
    });

    /**
    * Transform an array of edges into React-compatible edges.
    * @param {array} edges - The array of edges.
    * @returns {array} - The transformed array of React-compatible edges.
    */
    transformedtoReactEdges = (edges) => edges.map((value) => {
        return {
            source: value[0].toString(),
            target: value[1].toString(),
            weight: value[2],
            name: value[2].toString()
        };
    });

    /**
     * Execute a callback function for each neighbor of a given vertex.
     * @param {*} vertex - The vertex for which neighbors are found.
     * @param {*} callback - The function to be executed for each neighbor.
     */
    forEachNeighbor = (vertex, callback) => this.graph.forEachNeighbor(vertex, callback);

    /**
     * Format the adjacency list of the graph.
     * @param {Graph} graph - The graph.
     * @returns {Object} - The formatted adjacency list.
     */
    formatAdjecencyList(graph) {
        const formattedGraph = {}
        graph.forEachEdge((edge, attributes, source, destination) => {
            const weight = graph.getEdgeAttribute(edge, 'weight');
            if (weight === undefined) return;
            if (formattedGraph[source] === undefined) formattedGraph[source] = [];
            if (formattedGraph[destination] === undefined) formattedGraph[destination] = [];
            formattedGraph[source].push({ destination: destination, weight: weight });
            formattedGraph[destination].push({ destination: source, weight: weight });
        });
        return formattedGraph;
    }

    /**
    * Check if the given graph is connected.
    * @param {Graph} graph - The graph to check.
    * @returns {boolean} - True if the graph is connected, false otherwise.
    */
    isConnected(graph) {
        const visited = new Set();
        const startNode = graph.nodes()[0];

        function dfs(node) {
            visited.add(node);
            graph.forEachNeighbor(node, neighbor => {
                if (!visited.has(neighbor))
                    dfs(neighbor);
            });
        }

        dfs(startNode);
        return visited.size === graph.order;
    }
}

export default ConnectedGraph;