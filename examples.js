const assert = require('assert');

// ----------------------------------------
// 1.
// ----------------------------------------

function flip_words(sentence) {
  // Write your code here.
  return sentence
    .split(' ')
    .map(word => {
      return word.split('').reverse().join('')
    }).join(' ');
}


// ----------------------------------------
// 2.
// ----------------------------------------

function merge(a, b) {
  const merged = {};

  for (let key in a) {
    const value = a[key];

    if (Array.isArray(value)) {
      merged[key] = a[key].slice();
    } else if (typeof value === 'object' || value instanceof Object) {
      merged[key] = Object.assign({}, value);
    } else {
      merged[key] = value;
    }
  }

  for (let key in b) {
    const value = b[key];

    if (Array.isArray(value)) {
      if (a.hasOwnProperty(key)) {
        merged[key] = a[key].concat(value);
      } else {
        merged[key] = value;
      }
    } else if (typeof value === 'object' || value instanceof Object) {
      merged[key] = merge(a[key], value);
    } else {
      merged[key] = value;
    }
  }

  return merged;
}

/*
 * Complete the function below.
 */
function merge_hashes(hashes) {
    // Write your code here.
    const jsons = hashes.split(' | ');
    const [ target, source ] = jsons.map(j => JSON.parse(j));
    return JSON.stringify(merge(target, source));
}


// ----------------------------------------
// 3.
// ----------------------------------------

function find_dupes(numbers) {
  // Write your code here.
  const array = numbers.split(',').map(n => parseInt(n));

  const dupes = [];
  const counts = {};

  array.forEach(num => {
    if (!counts[num]) {
      counts[num] = 0;
    }
    counts[num]++;
  });

  for (let num in  counts) {
    if (counts[num] > 1) {
        dupes.push(Number(num));
    }
  }

  return dupes;
}


// ----------------------------------------
// 4.
// ----------------------------------------

function sort_by(lists) {
  // Write your code here.
  const [ unsortedOrder, values ] = lists.split('|').map(list => list.split(','));

  const sortedOrder = unsortedOrder.slice().sort();
  const indexMap = sortedOrder.reduce((obj, str, index) => {
    obj[str] = {
      unsortedIndex: unsortedOrder.indexOf(str),
      sortedIndex: index
    };
    return obj;
  }, {});

  const sorted = [];
  for (let key in indexMap) {
    const indexes = indexMap[key];
    sorted[indexes.sortedIndex] = values[indexes.unsortedIndex];
  }

  return sorted;
}


// ----------------------------------------
// 5.
// ----------------------------------------

function createPermutations(rest, length, current=[], perms=[]) {
  if (!rest.length) {
    return perms.push(current.join(''));
  }

  for (let i = rest.length - 1; i > -1; i--) {
    const next = rest[i];
    const copy = rest.slice();
    copy.splice(i, 1);
    createPermutations(copy, length, [...current, next], perms);
  }

  return perms;
}

function permute(word) {
  // Write your code here.
  const items = word.split('');
  const permutations = createPermutations(items, items.length);
  return permutations.join(',');
}


// ----------------------------------------
// 6.
// ----------------------------------------

/*

-- // ----------------------------------------
-- // Users
-- // ----------------------------------------
CREATE TABLE users(
  id SERIAL,
  email VARCHAR(255)
);



-- // ----------------------------------------
-- // Organizations
-- // ----------------------------------------
CREATE TABLE organizations(
  id SERIAL,
  name VARCHAR(255)
);



-- // ----------------------------------------
-- // Instances
-- // ----------------------------------------
CREATE TABLE instances(
  id SERIAL,
  name VARCHAR(255),
  organization_id INT
);


-- // ----------------------------------------
-- // Memberships
-- // ----------------------------------------
CREATE TABLE memberships(
  id SERIAL,
  user_id INT,
  organization_id INT
);


-- // ----------------------------------------
-- // Query to find all instances for user
-- // ----------------------------------------
SELECT * FROM instances
  WHERE instances.organization_id IN (
    SELECT organizations.id FROM memberships
      JOIN organizations ON organizations.id = memberships.organization_id
      JOIN users ON users.id = memberships.user_id
      WHERE users.email = 'user@email.com'
  )
;

 */
