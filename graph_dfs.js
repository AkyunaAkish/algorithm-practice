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
const checkIfRouteExists = (startingNode, targetNode, visited = new Set()) => {
  // depth first search (DFS)

  // for every call of this recursive function
  // add the current starting node to the visited Set
  visited.add(startingNode);

  let hasRoute = false;

  const destinations = adjacencyList.get(startingNode);

  for (const destination in destinations) {
   if (destination === targetNode) {
      hasRoute = true;
      return;
   }

   // if the current destination has not been visited yet, 
   // recursively call the function so that this node in the graph
   // will be drilled down into
   if (!visited.has(destination, visited)) {

   }
  }

};

console.log("Has Route: ", checkIfRouteExists("PHX", "BKK"));
