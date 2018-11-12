'use strict'

let elList = document.getElementById('graduates')
let elForm = document.getElementById('students')

let graduatesArray = []

let Graduates = function(name, school, language) {
  this.studentName = name
  this.codingSchool = school
  this.programmingLanguage = language
}

if(localStorage.studentsInList){
  let parseStudentsInList = localStorage.getItem('studentsInList')
  graduatesArray = JSON.parse(parseStudentsInList)
} else {
  let HeadLI = new Graduates('Name of Graduate', 'Coding School', 'Programming Language')
  graduatesArray.push(HeadLI)
}

let elNameOfStudent = elForm.name
let elCodingSchool = elForm.codingSchool
let elProgrammingLanguage = elForm.language

elForm.addEventListener('submit', function(event) {
  event.preventDefault()
  let newGraduate = new Graduates(elNameOfStudent.value, elCodingSchool.value, elProgrammingLanguage.value)
  graduatesArray.push(newGraduate)
  localStorage.setItem('studentsInList', JSON.stringify(graduatesArray))
  let elListItem = document.createElement('li')
  elList.appendChild(elListItem)
  elListItem.innerText = elNameOfStudent.value + ' ' + elCodingSchool.value + ' ' + elProgrammingLanguage.value
})

for(let i = 0; i < graduatesArray.length; i++){
  let elListItem = document.createElement('li')
  elList.appendChild(elListItem)
  elListItem.innerText = graduatesArray[i].studentName + ' ' + graduatesArray[i].codingSchool + ' ' + graduatesArray[i].programmingLanguage
}