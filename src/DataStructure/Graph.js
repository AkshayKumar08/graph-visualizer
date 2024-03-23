import Graph from 'graphology';
import erdosRenyi from 'graphology-generators/random/erdos-renyi';

class ConnectedGraph {
    constructor(nodeCount) {
        do {
            this.graph = erdosRenyi(Graph, { order: nodeCount, probability: (nodeCount < 50? 0.5: 0.2)   });
        } while (!this.isConnected(this.graph));

        this.graph.forEachEdge((edge, attributes, source, destination) => {
            if (source > destination) return;
            this.graph.setEdgeAttribute(source, destination, 'weight', Math.floor(Math.random() * 100) + 1);
        });

        this.nodes = this.graph.nodes();
        this.adjecencyList = this.formatAdjecencyList(this.graph);
        this.nodeCount = nodeCount;
    }

    transformNodeToReactNodes = (originalArray) => originalArray.map((value, index) => {
        return { id: index.toString(), name: value };
    });

    transformedtoReactEdges = (edges) => edges.map((value) => {
        return { 
            source: value[0].toString(), 
            target: value[1].toString(), 
            weight: value[2], 
            name: value[2].toString() 
        };
    });

    forEachNeighbor = (vertex, callback) => this.graph.forEachNeighbor(vertex, callback);

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