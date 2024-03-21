import Graph from 'graphology';
import erdosRenyi from 'graphology-generators/random/erdos-renyi';

class ConnectedGraph {
    constructor(nodeCount) {
        let graph;
        do {
            graph = erdosRenyi(Graph, { order: nodeCount, probability: 0.5 });
        } while (!this.isConnected(graph));

        graph.forEachEdge((edge, attributes, source, destination) => {
            if(source > destination) return;
            var weight = Math.floor(Math.random() * 100) + 1;
            graph.setEdgeAttribute(source, destination, 'weight', weight);
        });

        this.graph = graph;
        this.nodes = graph.nodes();
        this.adjecencyList = this.formatAdjecencyList(graph);
        this.nodeCount = nodeCount;
    }

    forEachNeighbor = (vertex, callback) => this.graph.forEachNeighbor(vertex, callback);
    getAdjecencyList = () => this.adjecencyList;

    formatAdjecencyList(graph) {
        const formattedGraph = {}
        graph.forEachEdge((edge, attributes, source, destination) => {
            const weight = graph.getEdgeAttribute(edge, 'weight');
            if(weight === undefined) return;
            if(formattedGraph[source] === undefined) formattedGraph[source] = [];
            if(formattedGraph[destination] === undefined) formattedGraph[destination] = [];
            formattedGraph[source].push({ destination: destination, weight: weight });
            formattedGraph[destination].push({ destination: source, weight: weight });
        });
        return formattedGraph;
    }

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