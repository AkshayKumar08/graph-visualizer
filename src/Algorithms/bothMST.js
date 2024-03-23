import krushkalMST from "./KrushkalMST";
import primsMST from "./PrimsMST";

const bothMST = (connectedGraph) => {
    const krushkal = krushkalMST(connectedGraph);
    const prims = primsMST(connectedGraph);
    return {
        krushkalTime: krushkal.krushkalTime,
        primsTime: prims.primsTime,
        minimumSpanningTree: krushkal.minimumSpanningTree
    }
}

export default bothMST;