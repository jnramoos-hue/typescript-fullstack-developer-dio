// const user = {
//     name: 'John',
//     age: 42,
//     showName(){
//         console.log(this.name)
//     }
// }
// const otherUser = {
//     name: 'Carlos',
//     age: 42,
//     showName(){
//         console.log(this.name)
//     }
// }

//-----------------------------------------------------------

class User {
    name: string = 'Joe'
    age: number = 28

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    showName = () =>{
        console.log(this.name)
    }
}

const user = new User('Joe', 28)
user.showName()

const otherUser = new User('Carlos', 32)
otherUser.showName()

