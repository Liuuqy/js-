function treeToList(tree) {
  let ans = tree.reduce((prev, cur) => {
    if (cur.children && cur.children.length) {
      let child = treeToList(cur.children);
      delete cur.children;
      prev = prev.concat(cur, child);
    } else {
      prev = prev.concat(cur);
    }
    return prev;
  }, []);
  return ans;
}
const data = [
  {
    id: "1",
    name: "父节点1",
    children: [
      {
        id: "1-1",
        name: "子节点1-1",
        children: [
          {
            id: "1-1-1",
            name: "子节点1-1-1",
          },
          {
            id: "1-1-2",
            name: "子节点1-1-2",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "父节点2",
    children: [
      {
        id: "2-1",
        name: "子节点2-1",
      },
    ],
  },
];
let res = treeToList(data);
console.log(res);
