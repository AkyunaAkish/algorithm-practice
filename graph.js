const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// Create the Graph
// (the key is each unique node,
// the value is a new Set of unique destination points)
const adjacencyList = new Map();

const addNode = (node) => {
  if (!adjacencyList.has(node)) {
    adjacencyList.set(node, new Set());
  }
};

const addEdge = (node, connectionNode) => {
  adjacencyList.get(node).add(connectionNode);
  adjacencyList.get(connectionNode).add(node);
};

for (const airport of airports) {
  addNode(airport);
}

for (const route of routes) {
  addEdge(...route);
}

console.log("adjacencyList", adjacencyList);

// create a function that checks if a route exists between a starting node and a destination node
const checkIfRouteExists = (startingNode, destinationNode) => {
  // breadth first search (BFS)
  const queue = [startingNode];
  const visisted = new Set();
  let hasRoute = false;

  while (queue.length > 0) {
    // take the first item off the queue
    const node = queue.shift(); // mutates queue
    const children = adjacencyList.get(node);

    for (const child of children) {
      if (!visisted.has(child)) {
        visisted.add(child);
        queue.push(child);
      }

      if (child === destinationNode) {
        hasRoute = true;
        break;
      }
    }

    if (hasRoute) break;
  }

  return hasRoute;
};

console.log("Has Route: ", checkIfRouteExists("PHX", "BKK"));
