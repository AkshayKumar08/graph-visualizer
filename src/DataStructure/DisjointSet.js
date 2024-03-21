class DisjointSet {
    constructor(nodeCount) {
        this.nodeCount = nodeCount;
        this.parent = new Array(nodeCount).fill(-1);
    }

    find(node) {
        if (this.parent[node] < 0) return node;
        return this.parent[node] = this.find(this.parent[node]);
    }

    union(u, v) {
        u = this.find(u);
        v = this.find(v);
        if (u === v) return false;

        if (this.parent[u] > this.parent[v]) {
            var temp = this.parent[u];
            this.parent[u] = this.parent[v];
            this.parent[v] = temp;
        }

        this.parent[u] += this.parent[v];
        this.parent[v] = u;
        return true;
    }
}

export default DisjointSet;
