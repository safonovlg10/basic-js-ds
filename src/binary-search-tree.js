const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root () {
    return this.rootTree;
  }

  add( data ) {
    this.rootTree = addNode(this.rootTree, data);

    function addNode(node, data) {
      if (!node){
        return new Node(data);
      }

      if (node.data === data){
        return node;
      }

      if (node.data > data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  has( data ) {
   return searchNode(this.rootTree, data);

   function searchNode(node, data) {
      if (!node){
        return false;
      }

      if (node.data === data){
        return true;
      }
      return data < node.data ? searchNode(node.left, data) : searchNode(node.right, data);
   }
  }

  find( data ) {
    
    return findNode(this.rootTree, data);

    function findNode(node, data) {
      if (!node){
        return null;
      }

      if (node.data === data){
        return node;
      }
      return data < node.data ? findNode(node.left, data) : findNode(node.right, data);
   }
  }

  remove( data ) {
    this.rootTree = removeNode(this.rootTree, data);

    function removeNode(node, data){
      if (!node){
        return null;
      }

      if (data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      } else if(node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {

        if (!node.right && !node.left){
          return null;
        }

        if(!node.left){
          node = node.right;
          return node;
        }

        if (!node.right){
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while(minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;

      }
    }
  }

  min() {

    if (!this.rootTree){
      return this.rootTree;
    }

    let node = this.rootTree;

    while (node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    
    if (!this.rootTree){
      return this.rootTree;
    }

    let node = this.rootTree;

    while (node.right){
      node = node.right;
    }

    return node.data;
  }
}
module.exports = {
  BinarySearchTree
};