const ages = [ 12 , 14 , 16 , 13 , 17];
const ages2  =[ 15 , 16 , 12 ];
const ages3 = [ 24 , 24 , 35];


const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [ ...ages , ...ages2 , 5 , ...ages3];
/// console.log(allAges2);

const business = 650 ;
const minister = 450 ;
const sochib = 259 ;
const takaPoisa = [650 , 450 , 259 ];
// const maximum = Math.max(business , minister , sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);
