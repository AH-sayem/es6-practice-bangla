const students = [
    {id : 21 , name : ' Omoor shany'},
    {id : 31 , name : ' mannan de'},
    {id : 41 , name : ' moyuri '},
    {id : 51 , name : ' dipjiool'}
] ;

// const name = students.map(s=> s.name);
// const ids = students.map(s=> s.id) ;
// const bigger = students.filter( s=> s.id > 40);
// const biggerOne = students.find( s=> s.id > 40);

// console.log(biggerOne); 

const name = students.map(s =>s.name);
const ids = students.map(s=>s.id)
const bigger = students.filter(s=> s.id > 40 );
const biggerOne = students.find(s=> s.id > 40);
console.log(biggerOne);
console.log(bigger);
console.log(name);
console.log(ids) ;

