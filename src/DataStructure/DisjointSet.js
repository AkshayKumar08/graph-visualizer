/**
 * Represents a Disjoint Set data structure for implementing Union-Find operations.
 */
class DisjointSet {
    /**
     * Initializes the Disjoint Set with the specified number of nodes.
     * @param {number} nodeCount - The number of nodes in the Disjoint Set.
     */
    constructor(nodeCount) {
        // Store the total number of nodes
        this.nodeCount = nodeCount;
        // Initialize the parent array to track the parent of each node
        // Initially, each node is its own parent, indicated by a value of -1
        this.parent = new Array(nodeCount).fill(-1);
    }

    /**
     * Finds the root of the set containing the specified node.
     * @param {number} node - The node whose root is to be found.
     * @returns {number} The root of the set containing the specified node.
     */
    find(node) {
        // If the node is its own parent, it is the root of its set
        if (this.parent[node] < 0) return node;
        // Otherwise, recursively find the root of the set containing the node
        // Also performs path compression to optimize future find operations
        return this.parent[node] = this.find(this.parent[node]);
    }

    /**
     * Performs the Union operation to merge the sets containing the specified nodes.
     * @param {number} u - The first node.
     * @param {number} v - The second node.
     * @returns {boolean} True if the two nodes were in different sets and were merged successfully, false otherwise.
     */
    union(u, v) {
        // Find the roots of the sets containing the specified nodes
        u = this.find(u);
        v = this.find(v);
        // If the nodes are already in the same set, return false
        if (u === v) return false;

        // Merge the smaller set into the larger set to optimize the depth of the tree
        if (this.parent[u] > this.parent[v]) {
            // Swap u and v to ensure that the smaller set becomes the child of the larger set
            [u, v] = [v, u]
        }

        // Update the parent and size information for the merged set
        this.parent[u] += this.parent[v];
        this.parent[v] = u;
        return true;
    }
}

export default DisjointSet;
