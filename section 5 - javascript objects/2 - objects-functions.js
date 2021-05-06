let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
}

let printBook = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }
}

let bookSummary = printBook(myBook)
let otherBookSummary = printBook(otherBook)

console.log(bookSummary.summary)
console.log(bookSummary.pageCountSummary)

// Challenge
let convertFahrenheit = function (fahrenheit) {
  let celcius = (fahrenheit - 32) * 5 / 9
  let kelvin = (fahrenheit + 459.67) * 5 / 9

  return {
    fahrenheit,
    celcius,
    kelvin
  }
}

let temps = convertFahrenheit(74)

console.log(temps)
