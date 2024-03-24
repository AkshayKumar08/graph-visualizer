const fs = require('fs');

const krushkalMST = require("../Algorithms/KrushkalMST");
const primsMST = require("../Algorithms/PrimsMST");
const ConnectedGraph = require("../DataStructure/Graph");

generateCSVReport = () => {
    console.log(`Generating Report...`);

    const filename = 'report.csv';
    let csvContent = 'nodeCount,KrushkalTime,PrimsTime\n';

    // Loop from 1 to 1000 with increment by 100
    for (let nodeCount = 100; nodeCount <= 2500; nodeCount += 100) {
        console.log(`Generating Report for node count = ${nodeCount}`);
        const connectedGraph = new ConnectedGraph(nodeCount);
        const { krushkalTime } = krushkalMST(connectedGraph);
        const { primsTime } = primsMST(connectedGraph);

        // Append nodeCount and timeComplexity to CSV content
        csvContent += `${nodeCount},${krushkalTime},${primsTime}\n`;
    }

    // Write CSV content to file
    fs.writeFileSync(filename, csvContent);
    console.log(`CSV file '${filename}' generated successfully.`);
}

generateCSVReport();