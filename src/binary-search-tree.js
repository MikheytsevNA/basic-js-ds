//const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class treeNode {
  prev = null;
  left = null;
  right = null;
  constructor(value) {
    this.data = value;
  }

}

class BinarySearchTree {
  isEmpty = true;
  first = {
    prev : null,
    left : null,
    right : null,
    data : 0
  };

  root() {
    if (this.isEmpty == true) {
      return null;
    } else {
      return this.first;
    }
  }

  choosePath(node, data) {
    if (data < node.data) {
      if (node.left == null) {
        let newNode = new treeNode(data);
        node.left = newNode;
        newNode.prev = node.left;
      }
        return node.left
    } else if (data > node.data) {
      if (node.right == null) {
        let newNode = new treeNode(data);
        node.right = newNode;
        newNode.prev = node.right;
      }
      return node.right;
    }
  }

  add(data) {
    if (this.isEmpty == true) {
      let newNode = new treeNode(data);
      this.first = newNode;
      this.isEmpty = false;
    } else {
      let currenNode = this.first;
      while (currenNode != null) {
        currenNode = this.choosePath(currenNode, data);
      }

    }
  }

  has(data) {
    let currenNode = this.first;
    while (currenNode != null) {
      if (data < currenNode.data) {
        currenNode = currenNode.left;
      } else if (data > currenNode.data){
        currenNode = currenNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  find(data) {
    let currenNode = this.first;
    while (currenNode != null) {
      if (data < currenNode.data) {
        currenNode = currenNode.left;
      } else if (data > currenNode.data){
        currenNode = currenNode.right;
      } else {
        return currenNode;
      }
    }
    return null;
  }

  remove(data) {
    this.first = this.removeRecursive(this.first, data);
  }

  removeRecursive (root, data) {
    if (root == null)
      return root;
    if (data < root.data) {
      root.left = this.removeRecursive(root.left, data);
    } else if (data > root.data) {
      root.right = this.removeRecursive(root.right, data);
    } else {
      if (root.left == null) {
        return root.right;
      } else if (root.right == null) {
        return root.left;
      }
      root.data = this.minFromNode(root.right);
      root.right = this.removeRecursive(root.right, root.data);
    }
    return root;
  }

  minFromNode (node) {
    let currenNode = node;
    while (currenNode != null) {
      if (currenNode.left == null) {
        return currenNode.data;
      } else {
        currenNode = currenNode.left;
      }
    }
    return node.data;
  }

  min() {
    let currenNode = this.first;
    while (currenNode != null) {
      if (currenNode.left == null) {
        return currenNode.data;
      } else {
        currenNode = currenNode.left;
      }
    }
  }

  max() {
    let currenNode = this.first;
    while (currenNode != null) {
      if (currenNode.right == null) {
        return currenNode.data;
      } else {
        currenNode = currenNode.right;
      }
    }
  }

  inorder() {
    this.inorderRecursion(this.first);
  }
  inorderRecursion(root) {
    if (root != null) {
        this.inorderRecursion(root.left);
        console.log(root.data + " ");
        this.inorderRecursion(root.right);
    }
  }
  }

let tree = new BinarySearchTree;

/* tree.add(3);
tree.add(2);
tree.add(2.5);
tree.add(1);
tree.add(4);
tree.add(3.5);
tree.add(5);
tree.inorder();
console.log(123);
tree.remove(5);
tree.inorder(); */

module.exports = {
  BinarySearchTree
};