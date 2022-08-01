const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 15;
const float: number = 15.45;
const num: number = 15e5;

const message : string = 'hello typescirt';

const numArray : number[] = [1, 2, 3, 5, 8, 13];
const numArray2 : Array<number> = [1, 2, 3, 5, 8, 13];

const words : string[] = ['hello', 'typescript'];

// Tuple
const contact : [string, number] = ['Dzianis', 15634];

// Any
let variable: any = 42;
// ...
variable = 'new string';
variable = [];

// ====
function sayMyName(name : string): void{
    console.log(name);
}

sayMyName('heisenberg');

function hiFunc(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!");
}

hiFunc('heisenberg');

// Never
function throwError(message: string): never {
    throw new Error(message);
}

function infinty(): never {
    while (true) {}
}

// Type
type Login = string;

const login : Login = 'admin';
//const login2 : Login = 2;

type ID = string | number;

const id1 = 1324;
const id2 = '1324';

type SomeType = string | null | undefined;
