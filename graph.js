// a list of all possible nodes in the graph / airports
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

// a list of all the connection points in the graph (direct airport to airport connections)
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

// each node (airport) will be added to the graph (map) as the key
// the value will be a new Set of unique destinations
// Map(11) {
//    'PHX' => Set(0) {},
//    'BKK' => Set(0) {},
//    'OKC' => Set(0) {},
//    'JFK' => Set(0) {},
//    'LAX' => Set(0) {},
//    'MEX' => Set(0) {},
//    'EZE' => Set(0) {},
//    'HEL' => Set(0) {},
//    'LOS' => Set(0) {},
//    'LAP' => Set(0) {},
//    'LIM' => Set(0) {}
//  }
const addNode = (node) => {
  if (!adjacencyList.has(node)) {
    adjacencyList.set(node, new Set());
  }
};

// for each connection list in the routes array
// set the first node -> second node as an edge
// and set the second node -> first node as an edge
// Map(11) {
//    'PHX' => Set(2) { 'LAX', 'JFK' },
//    'BKK' => Set(2) { 'MEX', 'LIM' },
//    'OKC' => Set(1) { 'JFK' },
//    'JFK' => Set(4) { 'PHX', 'OKC', 'HEL', 'LOS' },
//    'LAX' => Set(2) { 'PHX', 'MEX' },
//    'MEX' => Set(4) { 'LAX', 'BKK', 'LIM', 'EZE' },
//    'EZE' => Set(1) { 'MEX' },
//    'HEL' => Set(1) { 'JFK' },
//    'LOS' => Set(1) { 'JFK' },
//    'LAP' => Set(0) {},
//    'LIM' => Set(2) { 'MEX', 'BKK' }
//  }
// this creates a full graph of all the nodes and their connection points
const addEdge = (node, connectionNode) => {
  adjacencyList.get(node).add(connectionNode);
  adjacencyList.get(connectionNode).add(node);
};

// loop through the overall list of nodes and add them to the map/graph
for (const airport of airports) {
  addNode(airport);
}

// loop through all of the connection points (routes) and add them as edges
for (const route of routes) {
  addEdge(...route);
}

// create a function that checks if a route exists between a starting node and a destination node
const checkIfRouteExists = (startingNode, destinationNode) => {
  // breadth first search (BFS)

  // the queue will be responsible for
  // holding the items we still need to check
  // when checking an item, we are looking to see if
  // the children of a particular node is the destination
  // node or not, if so we have found a viable path
  // since the first node we check is our intended starting point
  const queue = [startingNode];

  // this Set represents all of the children nodes
  // we have already checked so that we don't infinitely loop
  const visisted = new Set();

  // this holds the state of whether the route
  // exists that we are looking for or not
  let hasRoute = false;

  // continue to check nodes and their children
  // as long as the queue is populated with nodes
  // to check the children of
  while (queue.length > 0) {
    // take the first item off the queue
    const node = queue.shift(); // mutates queue by removing the first item (FIFO, first in first out)
    const children = adjacencyList.get(node); // the children of the current node to check for the destination in

    // loop over all the children
    for (const child of children) {
      // if we have not visited  the child before
      // set the child to visited (since we don't want to add it to the queue again)
      // and then add it to the queue
      if (!visisted.has(child)) {
        visisted.add(child);
        queue.push(child);
      }

      // if the current child is the destination node
      // then we have found a viable route and we can exit the loop
      // and set hasRoute to true
      if (child === destinationNode) {
        hasRoute = true;
        break;
      }
    }

    // if hasRoute is true, exit the while loop
    if (hasRoute) break;
  }

  return hasRoute;
};

console.log("Has Route: ", checkIfRouteExists("PHX", "BKK"));
