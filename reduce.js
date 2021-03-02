// array in reduce

const nums = [12, 45, 42, 19, 27,37];

const map = nums.map(num => num* 2);
const filter = nums.filter(num => num > 20);
const find = nums.find(num => num > 20);
// const reduce = nums.reduce((sum, num) => sum + num, 0);
const reduce = nums.reduce((sum, num) => {
  console.log(sum, num);
  return sum + num
}, 0);

console.log("map: ", map);
console.log("filter: ", filter);
console.log("find: ", find);
console.log("reduce: ", reduce);



//  object in reduce

const persons = [
  {name: 'John', age:37,},
  {name: 'Jacika', age:18,},
  {name: 'Rose', age:19,}
];

const personInfo = persons.reduce((sum, person) => {
  console.log(sum, person);
  return sum + person.age;
}, 0);
console.log("personInfo: ", personInfo);
