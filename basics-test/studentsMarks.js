// Challenge 2: Student Marks Analysis
// You have an array of student objects:
// [
//   {name: "Alice", marks: [78, 92, 88]},
//   {name: "Bob", marks: [64, 70, 75]},
//   {name: "Charlie", marks: [95, 85, 90]},
//   {name: "David", marks: [50, 60, 58]}
// ]
// Calculate average marks for each student
// Assign grade based on average (A-F, same as before)
// Output who passed (average ≥ 60) and who failed

function studentMarks(arr) {
  for (let i = 0; i < arr.length; i++) {
    let average = 0;
    let total = 0;
    for (let j = 0; j < arr[i].marks.length; j++) {
      total = total + arr[i].marks[j];
    }
    average = (total / arr[i].marks.length).toFixed(0);

    let status = average >= 60 ? "Passed" : "Failed"
    if (average >= 90) {
      console.log(
        `${arr[i].name} you have graded  A !! brilliant Excellent Work!! Status : ${status}`,
      );
    } else if (average >= 80 && average <= 89) {
      console.log(
        `${arr[i].name}  you have graded  B !! Good job just lil more efforts Status : ${status}`,
      );
    } else if (average >= 70 && average <= 79) {
      console.log(
        `${arr[i].name}  you have graded  C !! Well tried You can do much better!!! Status : ${status}`,
      );
    } else if (average >= 60 && average <= 69) {
      console.log(
        `${arr[i].name}  you have graded  D !! Poor effort You should work hard!! Status : ${status}`,
      );
    } else if (average < 60) {
      console.log(
        `${arr[i].name}  you have graded  F !! You failed You should work really harder to pass Status : ${status}`,
      );
    }
  }
}

studentMarks([
  { name: "Alice", marks: [78, 92, 88] },
  { name: "Bob", marks: [64, 70, 75] },
  { name: "Charlie", marks: [95, 85, 90] },
  { name: "David", marks: [50, 60, 58] },
]);
