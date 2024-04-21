const students = [
  { name: "Dhishan Debnath", Roll: 1 },
  { name: "Animesh Gupta", Roll: 2 },
  { name: "Tapas Sen", Roll: 3 },
  { name: "Misti Dutta", Roll: 4 },
  { name: "Chini Misra", Roll: 5 },
];
const Details = [
  { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
  { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
  { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
  { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
  { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } },
];
function generateStudentMarkSheets(students, Details) {
  const studentsMarkSheets = [];

  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < Details.length; j++) {
      if (students[i].Roll === Details[j].Roll) {
        const total =
          Details[j].subjects.math +
          Details[j].subjects.english +
          Details[j].subjects.chemistry +
          Details[j].subjects.computer;
        studentsMarkSheets.push({
          name: students[i].name,
          Roll: Details[j].Roll,
          math: Details[j].subjects.math,
          english: Details[j].subjects.english,
          chemistry: Details[j].subjects.chemistry,
          computer: Details[j].subjects.computer,
          total: total,
          status: total >= 200 ? "Pass" : "Fail",
        });
        break;
      }
    }
  }

  console.log(studentsMarkSheets);
}

generateStudentMarkSheets(students, Details);
