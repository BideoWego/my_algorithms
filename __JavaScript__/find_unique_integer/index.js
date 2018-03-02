// Each breakfast delivery is assigned a unique ID, a positive integer.
// When one of the company's 100 drones takes off with a delivery, the delivery's ID is added to an array, deliveryIdConfirmations.
// When the drone comes back and lands, the ID is again added to the same array.

// After breakfast this morning there were only 99 drones on the tarmac.
// One of the drones never made it back from a delivery.
// We suspect a secret agent from Amazon placed an order and stole one of our patented drones.
// To track them down, we need to find their delivery ID.

// Given the array of IDs, which contains many duplicate integers and one unique integer, find the unique integer.
// The IDs are not guaranteed to be sorted or sequential.
// Orders aren't always fulfilled in the order they were received, and some deliveries get cancelled before takeoff.

// [92398, 928934, 92398, 928934, 2384]

// O(n) time algorithm to find the unique id


function findMissingDroneId(ids) {
  if (!ids.length) {
    return;
  }

  if (ids.length === 1) {
    const [ id ] = ids;
    return id;
  }

  const hash = {};
  ids.forEach(id => { hash[id] ? delete hash[id] : hash[id] = true; });
  const [ key ] = Object.keys(hash);
  return +key;
}

console.log(findMissingDroneId([92398, 928934, 92398, 928934, 2384]));
//=> 2384


// let drones = [92398, 928934, 92398, 2384, 928934];
let drones = [1, 2, 1, 3, 2];
const idFinder = arr => drones.reduce((a, b) => {
  const lastSum = a;
  console.log(a, b, a.toString(2), b.toString(2));
  a ^= b;
  const currentSum = a;
  // console.log(lastSum, currentSum);
  return a;
});
console.log(idFinder(drones));
//=> 2384
