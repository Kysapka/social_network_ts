function  User() {
    this.name = 'User'
}

function  Tree() {
    this.name = 'Tree'
}

User.prototype.age = 20
Tree.prototype.age = 1000

const p = User.prototype

User = function (){
    this.name = 'Sam'
}

User.prototype = Tree.prototype
Tree.prototype = p

User.prototype.constructor = Tree

const user = new User()
const tree = new Tree()

console.log(`user:${user.age}, ${user.name}`) //20  //sam    //undefined?
console.log(`tree:${tree.age}, ${tree.name}`) //20   //Tree        //undefined?