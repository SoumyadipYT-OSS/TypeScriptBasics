/*============== UNIONS ===============*/

type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;


// Unions provide a way to handle different types
function getLength(obj: string | string[]) {
    return obj.length;
}
console.log(getLength("TS JS"));

// function return different values depending on whether it is passed a string or an array
function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") return [obj];
    return obj;
}

/*======================================*/




/*===============GENERICS===============*/

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// Example
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

declare const backpack: Backpack<string>;
