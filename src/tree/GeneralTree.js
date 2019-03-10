//node structure must have id, parentId, and children property where children property is an array.
//for example: node = {value: {}, id: 'someInteger', parentId: 'someInteger or Null', children: {}}
class GeneralTree {
	constructor (node) {
		this.root = node;
	}

	insert(node) {
		let q = [];
		q.push(this.root[Object.keys(this.root)[0]]);
		while(q.length > 0 ) {
			let currentNode = q.shift();
			if(currentNode.id === node.parentId) {
				currentNode.children[node.id] = node;
				break;
			} 
			else {
				for (let i in currentNode.children) {
					q.push(currentNode.children[i]);
				};
			};
		};	
	}

	find(id) {
		let q = [];
		q.push(this.root);
		while(q.length > 0) {
			let currentNode = q.shift();
			if(currentNode.id === id) {
				return currentNode;
			} 
			else {
				for(let i of currentNode.children) {
					q.push(i);
				};
			};
		};
		return null
	}
}

export default GeneralTree;
