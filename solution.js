// 1. 
const euroCities = ['Paris', 'London', 'Valletta', 'Prague', 'Rome'];
console.log('1.', euroCities);
const secondCity = 'London';
console.log('1.', secondCity);

// 2.
euroCities.splice(0, 1, 'Berlin');
console.log(euroCities);

// 3.
console.log('3.', euroCities.length);
euroCities.pop()

// 4.
console.log('4.', euroCities);

// 5.
euroCities.push('Budapest');
console.log('5.', euroCities);

// 6.
const asianCities = ['Seoul', 'Mumbai', 'Tokyo', 'Hanoi', 'Beijing'];
console.log('6.', asianCities);

// 7.
const worldCities = euroCities.concat(asianCities);
console.log('7.', worldCities);

// 8.
console.log('8.', worldCities.reverse());

// 9.
euroCities.splice(2, 1);
console.log('9.', euroCities);

// 10.
const selectCities = asianCities.slice(1, 4);
console.log('10.', selectCities);

// 11.
worldCities.splice(2, 3, 'Toronto');
console.log('11.', worldCities);

// 12.
worldCities.splice(1, 0, 'Washington');
console.log('12.', worldCities);

// 13.
console.log('13.', worldCities.join(', '));
console.log('13.', worldCities.join( '+'));

// Bonus:
const myArray = ['Hello', 'World'];
console.log('Bonus', myArray.reverse());

// Extra Practice:
const mySiblings = ['Wednesday', 'Pugsley'];
console.log('1.', mySiblings);
const myParents = ['Morticia', 'Gomez'];
console.log('2.', myParents);
const myFamily = (myParents.concat(mySiblings));
console.log('3.', myFamily);
myFamily.push('Aristotle');
console.log('4.', myFamily);
console.log('5.', myFamily.reverse());
console.log('6.', myFamily[4]);
myFamily.splice(4, 5, 'Mrs. Addams');
console.log(myFamily);




