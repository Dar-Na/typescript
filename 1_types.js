var isFetching = true;
var isLoading = false;
var int = 15;
var float = 15.45;
var num = 15e5;
var message = 'hello typescirt';
var numArray = [1, 2, 3, 5, 8, 13];
var numArray2 = [1, 2, 3, 5, 8, 13];
var words = ['hello', 'typescript'];
// Tuple
var contact = ['Dzianis', 15634];
// Any
var variable = 42;
// ...
variable = 'new string';
variable = [];
// ====
function sayMyName(name) {
    console.log(name);
}
sayMyName('heisenberg');
function hiFunc(name) {
    console.log("Hello, " + name.toUpperCase() + "!");
}
hiFunc('heisenberg');
// Never
function throwError(message) {
    throw new Error(message);
}
function infinty() {
    while (true) { }
}
var login = 'admin';
var id1 = 1324;
var id2 = '1324';
