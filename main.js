//Company object
const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company two", category: "Retail", start: 1992, end: 2008},
  {name: "Company three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 22016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

//Ages array
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// // FOR LOOP

// for(let i=0; i < companies.length; i++){
// console.log(companies[i]);
// }


// //forEach

// companies.forEach(function(company,index,fullObject) {
// console.log(company.start)
// });


// //FILTER
// DRINKING AGE OVER 21
//FOR LOOP 

// let canDrink = [];
// for(let i=0; i <= ages.length; i++){
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);


//ES5 BUILT IN METHOD, FILTER
//GET ALL AGES ALLOWED TO DRINK

// const canDrink = ages.filter(function(age, index, fullObject) {
//  if (age,index,fullObject >= 21) {
//   return true;
// }
// console.log(age,index, fullObject);
// });

//ES6 ARROW FUNCTION (ONE LINER)
//WITH FILTER GET ALL AGES ALLOWED TO DRINK

// const canDrink = ages.filter(age=> age >= 21);
// console.log(canDrink);


//ES5
// WITH FILTER GET ALL RETAIL COMPANIES

// const retailCompanies = companies.filter(function(anything){
//  if(anything.category === 'Retail'){
//  return true;
//  }
// });
// console.log(retailCompanies);


//ES6 ARROW FUNCTION
//WITH FILTER GET ALL RETAIL COMPANIES

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);


//ES6 ARROW FUNCTION
//WITH FILTER GET 80's COMPANIES

// const eightiesCompanies = companies.filter(company => (company.start >= 1979 && company.start < 1989));
// console.log(eightiesCompanies);


//ES6 ARROW FUNCTION
//WITH FILTER GET COMPANIES WHICH LASTED MORE THAN 10 YEARS

// const lastedTenYears = companies.filter(company => company.end - company.start >= 10);
// console.log(lastedTenYears);


// // MAP // Create any array from the current array
//WITH MAP CREATE ARRAY OF COMPANY NAMES

// const companyNames = companies.map(function(company){
//   return company.name;
// })
// console.log(companyNames);


//WITH MAP GET ARRAY OF START TO END DATES

// const mapCompanyNames = companies.map(function(company){
//   return company.name;
// });
// console.log(mapCompanyNames);


// WITH MAP NAME AND START TO END DATE AND ES6 TEMPLATE STRINGS & SYNTAX FOR VARIABLE
// const mapRange = companies.map(function(company){
//   return `${company.name} [${company.start}-${company.end}]`;
// });
// console.log(mapRange);

//SHORT HAND WAY TO GET THE SAME THING: NAME & START TO END
// const mapRange = companies.map(company => `${company.name} [${company.start}-${company.end}]`);
// console.log(mapRange);

//WITH MAP GET EACH AGE AND SQUARE IT
// const sqrAge = ages.map(age => Math.sqrt(age));
// console.log(sqrAge);
//TIMES EACH AGE BY 2
// const ageTimesTwo = ages.map(age => age *2);
// console.log(ageTimesTwo);
//ADD SECOND MAP TO SQUARE AGE AND TIMES BY TWO (can keep adding more Maps/Maths)
//  const sqrAgeTimesTwo = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age *2);
//  console.log(sqrAgeTimesTwo);

//SORT
//SORT COMPANIES BY DATE NEWEST TO OLDEST
// const sortDate = companies.sort(function(c1, c2){
//   if(c1.start > c2.start){
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortDate);

//SHORT HAND ES6 ARROW FUNCTIONS (SORT COMPANIES BY DATE NEWEST TO OLDEST)
// const sortCompanies = companies.sort((a,b)=> (a.start > b.start) ? 1 : -1);
// console.log(sortCompanies);

//GET AGES IN ORDER LOWEST TO HIGHEST (reverse a and b to descend in age)
// const sortAges = ages.sort((a,b)=> a-b);
// console.log(sortAges);

//reduce
//ADD ALL AGES TOGETHER
let sortAges = 0;
for (let i = 0; i < ages.length; i++){
 sortAges += ages[i];
}
console.log(sortAges);
