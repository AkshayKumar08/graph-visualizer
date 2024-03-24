# Minimum Spanning Tree Visualizer


This project is a visualization tool for Minimum Spanning Tree (MST) algorithms implemented using React. It allows users to visualize the Kruskal's and Prim's algorithms on randomly generated connected graphs.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Algorithm Implementations
### Kruskal's Algorithm
The krushkalMST function implements Kruskal's algorithm for finding the Minimum Spanning Tree of a graph.

### Prim's Algorithm
The primsMST function implements Prim's algorithm for finding the Minimum Spanning Tree of a graph

## Data Structures
### Disjoint Set
The DisjointSet class implements the Disjoint Set data structure, which is used in Kruskal's algorithm.
### ConnectedGraph 
The ConnectedGraph class generates a connected graph using the Erdős–Rényi model and provides methods for transforming the graph for visualization.

## Components

### InputSection
The InputSection component allows users to input the number of vertices for the graph and select the MST algorithm

### AlgorithmSelector
The AlgorithmSelector component provides a dropdown menu to select the MST algorithm (Kruskal's, Prim's, or both).

### InputSize
The InputSize component consists of an input field to input the number of vertices for the graph.

### Button
The Button component represents a clickable button used to trigger the generation of the MST.

### TimeTable
The TimeTable component displays the runtime of Kruskal's and Prim's algorithms in milliseconds.

### Visualizer
The Visualizer component is the main component responsible for rendering the MST visualization using the ForceGraph2D library.


## Dependencies

* React: JavaScript library for building user interfaces.
* react-force-graph: React component for 3D force-directed graph visualization.
* graphology: JavaScript graph library.
* graphology-generators: Library for generating graph structures


## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/AkshayKumar08/graph-visualizer.git
```

### Navigate to the project directory:

```bash
cd graph-visualizer
```

### Install dependencies:

```bash
npm install
```

### Start the development server:


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
