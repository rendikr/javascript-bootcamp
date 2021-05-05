// global scope (name)
  // local scope
    // local scope
  // local scope

let name = 'Andrew'

if (true) {
  let name = 'Mike'
  if (true) {
    name = 'Jen'
    console.log(name)
  }
}

if (true) {
  console.log(name)
}
