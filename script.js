const students = [
  {
    name: 'Julía',
    firstNote: 6,
    secondNote: 8,
  },
  {
    name: 'Marcos',
    firstNote: 3,
    secondNote: 9,
  },
  {
    name: 'Erick',
    firstNote: 5,
    secondNote: 2,
  },
]

function printAvarege (student){
  return`
   O aluno(a) ${student.name} tem média de
   ${Number(student.firstNote) + (Number(student.secondNote) / 2)}
   `
}


for (let student of students){
  let NoteAvarege = printAvarege(student)
  alert(NoteAvarege)
}

