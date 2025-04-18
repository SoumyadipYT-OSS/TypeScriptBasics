const user = {
    name: "test User",
    id: 0,
};

const person = {
    firstName: "Dishant",
    familyName: "Yadav",
    id: 0,
};

console.log(user);
console.log(person);


//-------------------------


interface User {
    name: string;
    id: number;
}

const userProfile: User = {
    name: "User1",
    id: 0
};

console.log(userProfile);


//-------------------------


interface IUser {
    name: string;
    id: number;
}

class UserAccount {
    name: string;   // until you assign constructor it shows an error
    id: number;     // until you assign constructor it shows an error

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user1: IUser = new UserAccount("Yaashi", 1);
console.log(user1);


// ------------------------


function deleteUser(user: IUser): void {
    console.log(`User ${user.name} with ID ${user.id} has been deleted.`);
}

function getAdminUser(): IUser {
    const adminUser: IUser = {
        name: "Admin",
        id: 1
    };
    console.log(`Admiin user retrieved: ${adminUser.name}, ID: ${adminUser.id}`);
    return adminUser;
}

// Example usage
const admin = getAdminUser();
deleteUser(admin);

