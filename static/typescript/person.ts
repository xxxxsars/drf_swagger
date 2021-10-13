interface Person {
    firstName: string;
    lastName: string;
}


function greeter(person: Person) {
    return "Hello ," + person.firstName + " " + person.lastName;
}

let user = {firstName: "Jane", lastName: "User"}


let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

let phoneNumber :string = "0980-765-448"

let userData :string = `Your phone number is ${phoneNumber}. `
let list :number[] = [1,2,3];

let list2 :Array<number> = [1,2,3]

let x:[string,number] = ["hello",10]


function error(message: string) : never {
    throw new Error(message);
}

let test :any ;

test = "123123"

let testLength :number = (test as string).length