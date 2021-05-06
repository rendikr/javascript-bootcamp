// students score, total possible score
// 15/20 -> you got a C (75%)
// A : 90-100, B : 80-89, C : 70-79, D: 60-69, E : 0-59
let gradeCalculator = function (score = 0, totalScore = 20) {
  let percent = (score / totalScore) * 100
  let grade = 'E'

  if (percent >= 90) {
    grade = 'A'
  } else if (percent >= 80) {
    grade = 'B'
  } else if (percent >= 70) {
    grade = 'C'
  } else if (percent >= 60) {
    grade = 'D'
  }

  let result = `You got a ${grade} (${percent}%)!`
  return result
}

let grade = gradeCalculator(15)
console.log(grade)
