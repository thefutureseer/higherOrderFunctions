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

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// // for loop
// for(let i=0; i < companies.length; i++){
//  console.log(companies[i]);
// }

// //forEach
// companies.forEach(function(company) {
//  console.log(company.start)
// });

//filter

// let canDrink = [];
// for(let i=0; i <= ages.length; i++){
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
//  console.log(canDrink);

// const canDrink = ages.filter(function(age, index, fullObject) {
//  if (age,index,fullObject >= 21) {
//   return true;
// }
//   console.log(age,index, fullObject);
// });

// const canDrink = ages.filter(age=> age >= 21);
// console.log(canDrink);

// const retailCompanies = companies.filter(function(anything){
//  if(anything.category === 'Retail'){
//  return true;
//  }
// });
// console.log(retailCompanies);


const retailCompanies = companies.filter(company => company.category === 'Retail');
 console.log(retailCompanies);
