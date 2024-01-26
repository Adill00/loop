//Part 1

const dayOfWeek = 'Wednesday';

switch (dayOfWeek){
    case 'Monday':
        console.log('study Math');
        break;
    case 'Tuesday':
        console.log('study English');
        break;
    case 'Wednesday':
        console.log('study React Native');
        break;
    case 'Thursday':
        console.log('study Physics');
        break;
    case 'Friday':
        console.log('study Javascript');
        break;
    case 'Saturday':
        console.log('sleeping all day');
        break;
    case 'Sunday':
        console.log('doing all homework at 11PM');
        break;
    default:
        console.log('this is not week day');
        break;
}


//Part 2

const numbers = [1,2,3,4,8];
let sum = 0;

for (let i = 0 ;i<numbers.length ;i++){
    sum += numbers[i];
    console.log(numbers[i] , sum);
}


//Part 3

const fruits = ['Apple','Banana','Kiwi','Cherry']

for (let i =0 ;i<fruits.length ; i++){
    console.log(fruits[i] , fruits[i].length);
}


//Part 4

const student={
    name:'Adil',
    grade:58
}

if(student.grade >= 60){
    console.log('PASS')
}else{
    console.log('FAIL')
}