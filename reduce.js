  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
/*const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0); //Always add the initial value to callback function
console.log(sum);
*/

//Same as above but expanded:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
  console.log(
    "Accumulator:", acc,
    "Current value:", curr,
    "Total:", acc + curr
  );
  return acc + curr;
}, 100); //Adding additional value to the array
console.log(sum);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
// {Developer: 12, Designer: 4} <--this is what we want!
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {})

console.log(experienceByProfession);


let ProfessionByName = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = [curr.name];
  }  else {
    acc[key].push(curr.name);
  }
  return acc;
}, {})

console.log(ProfessionByName);
