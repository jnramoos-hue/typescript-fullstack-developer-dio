//---------------------------------------------------------------------
//Variaveis e tipos

// let b = 'b'
// const c = 'c'
//
// let m: any = 2
// m = 'Junior'
// m = false


//---------------------------------------------------------------------
// Objetos e interface

// interface  Person {
//     name: string
//     age: number
//     profission?: string | undefined
// }
//
// const person: Person = {
//     name: 'Joe',
//     age: 28
// }
//
// const otherPerson: Person = {
//     name: 'Jose',
//     age: 30,
//     profission: 'Engineer',
// }
//
// const arrayPerson: Array<Person> = [
//     person,
//     otherPerson
// ]

// const arrayNum: number[] = [
//     1, 2, 3
// ]
//
// const arrayString: Array<string> = [
//     '1', '2', '3'
// ]

//---------------------------------------------------------------------
// Decisões e repetições...

// const num: number = 15;
//
// if (num > 15) {
//     console.log('Num maior que 15')
// }else if (num === 15){
//     console.log('Num igual 15')
// } else {
//     console.log('Num menor que 15')
// }

// const typeUser = {
//     admin: 'Seja bem vindo admin',
//     student: 'Você é um estudante',
//     viewer: 'Voce pode visualizar'
// }
//
// function validadeUser(user: string){
//     console.log(typeUser[user as keyof typeof typeUser]);
// }
//
// const usuario = 'admin'
//
// validadeUser(usuario);
// validadeUser('student');
// validadeUser('viewer');

//---------------------------------------------------------------------
// Estrutura de repetição
// For
//
// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }
//
// let n = 2
// while (n > 6 ){
//     console.log(n)
//     n++
// }


//---------------------------------------------------------------------
// Array

// const array: Array<any> = [1, 2, 3, 4]
//
// const stringArray: string[]  = ['a', 'b', 'c']
//
// // console.log(array [0])
//
// // console.log('array original: ', array)
// //
// // array.push(5)
// //
// // console.log('Array com o novo elemento: ', array)
// //
// // array.pop()
// //
// // console.log('Array retirando o ultimo elemento: ', array)
//
// // const buscaNum =  array.find(num => num === 4)
// // const buscaNum =  array.find(num => num > 4)
// // console.log(buscaNum)
//
// array.forEach(num => {
//     if (num > 2){
//         console.log(num)
//     }
// })

//---------------------------------------------------------------------
// app.ts
import './oop'


