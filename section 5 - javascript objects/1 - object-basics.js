let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge
let person = {
  firstName: 'Andrew',
  age: 27,
  location: 'Philadelphia'
}

console.log(`${person.firstName} is ${person.age} and lives in ${person.location}`)

person.age++

console.log(`${person.firstName} is ${person.age} and lives in ${person.location}`)
