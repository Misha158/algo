const factorial = (n) => {
  // debugger;
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

// factorial(4) = 4 * factorial(3) // 24
// factorial(3) = 3 * factorial(2) // 6
// factorial(2) = 2 * factorial(1) // 2
// factorial(1) = 1

console.log(factorial(4));

const tree = {
  title: "A",
  value: 1,
  children: [
    {
      title: "B",
      value: 2,
      children: [
        {
          title: "C",
          value: 3,
        },
      ],
    },
    { title: "D", value: 4 },
  ],
};

let sum = 0;

const traverse = (tree) => {
  console.log(tree.title);
  sum += tree.value;

  if (tree.children) {
    tree.children.forEach((child) => {
      traverse(child);
    });
  }

  return sum;
};

console.log(traverse(tree));
