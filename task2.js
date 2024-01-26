// Part 1
const color = 'red';

switch(color){
    case 'green':
        console.log('Green-Go');
        break;
    case 'yellow':
        console.log('Yellow-Caution');
        break;
    case 'red':
        console.log('Red-Stop');
        break;
    default:
        console.log('Bakiya yagis yagdi');
        break;
}


//Part 2

const matrix = [ [1,2] , [3,4] , [5,6] , [7,8] , [9,10] ];

for (let i =0 ; i<matrix.length ; i++){
    for(let j=0 ; j< matrix[i].length ; j++){
        console.log(matrix[i][j]);
    }
}



// Part 3

const product = {
    name:'Cola',
    price:2,
    inStock:true
}

let property;

for (property in product){
    console.log(property, ':' , product[property]);
}


// Part 4

if( product.price<50     &&     product.inStock==true      ){
    console.log('Available');
}else{
    console.log('Unavailable');
}
