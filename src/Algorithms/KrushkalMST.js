import DisjointSet from "../DataStructure/DisjointSet";

const krushkalMST = (graph) => {
    const edges = [];
    for(const source in graph.adjecencyList) {
        for(const {destination, weight} of graph.adjecencyList[source]){
            edges.push([source, destination, weight]);
        }
    }

    edges.sort((a, b) => a[2] - b[2]);

    let total = 0;
    const minimumSpanningTree = [];
    const disjointSet = new DisjointSet(Object.keys(graph.adjecencyList).length);
    const startTime = Date.now();

    for(var [source, destination, weight] of edges){
        source = parseInt(source);
        destination = parseInt(destination);
        weight = parseInt(weight);
        if(disjointSet.union(source, destination)){
            minimumSpanningTree.push([source, destination, weight]);
            total += weight;
        }
    }
    const endTime = Date.now();
    const time = endTime - startTime;
    return {
        krushkalTime: time,
        minimumSpanningTree,
        totalWeight: total
    };
}

export default krushkalMST;