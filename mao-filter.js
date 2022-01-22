const number = [ 3 , 4 , 5 , 6 , 7]

// const output = [] ;

// for ( let i = 0 ; i < number.length ; i++)
// {
//     const element = number [ i ];

//     const result = element * element ;

//     output.push (result);
// }

// function square (element)
// {
//         return element * element ;
// }

// number.map(function(element , index){
//     console.log(element , index);

// const squre = element => element * element ;

// const squre = x => x*x ;

// const result = number.map(function(element){
    
//     return element * element ;

// })

// const result = number.map(x=> x*x);

// console.log(result);

// console.log ( output);

const bigger = number.filter(x=> x>5) ;

const isThere = number.find(x=> x>5);



console.log(isThere);