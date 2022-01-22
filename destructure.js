

const person = { name : ' jack william ', age: 17 , job: ' facebooker ' , gfName : ' Ema watson ' , address : ' koch katra ' , phone : ' 019189198181' , frinds : [' tom Hangs ' , ' tom yearn ' , ' sayem' ]  }

// const {phone , gfName}  = person ;

// //  const gfName = person.gfName ;
// // const phone = person.phone ;

// // console.log ( gfName , phone)
// // console.log(gfName, phone)
// // console.log ( gfName, phone)
// // console.log(gfName , phone)

// const friends = [ ' sakib khan ' , ' Arman khan ' , ' amir khan  ' , ' salman khan '] ;

// const [ fast , nextFriends , ...restFriends ] = friends ;
// // console.log(fast);
// // console.log(fast , nextFriends);
// console.log(restFriends);

const {phone} = person ;

const complexObject = 
{
    name : ' abc' ,
    info :
    {
        address : ' kola bagan ',
        leader : ' Tiger leader'
    }

 
}
const  {leader} = complexObject.info  ;

console.log(leader);