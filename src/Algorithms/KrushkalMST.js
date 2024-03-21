import DisjointSet from "../DataStructure/DisjointSet";

const Krushkal = (graph) => {
    const edges = [];
    for(const source in graph.getAdjecencyList()) {
        for(const {destination, weight} of graph.getAdjecencyList()[source]){
            edges.push([source, destination, weight]);
        }
    }

    edges.sort((a, b) => a[2] - b[2]);

    let total = 0;
    const minimumSpanningTree = [];
    const disjointSet = new DisjointSet(Object.keys(graph.getAdjecencyList()).length);
    for(var [source, destination, weight] of edges){
        source = parseInt(source);
        destination = parseInt(destination);
        weight = parseInt(weight);
        if(disjointSet.union(source, destination)){
            minimumSpanningTree.push([source, destination, weight]);
            total += weight;
        }
    }

    console.log("Krushkal's MST", total);
    console.log(minimumSpanningTree);
    return minimumSpanningTree;
}

export default Krushkal;