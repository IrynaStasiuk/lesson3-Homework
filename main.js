// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
let dog={name:'Dingo',age:5,color:'white',weight:40,size:'small'};
let men={name:'Vasya',age:25,job:'doctor',weight:85,status:'married'};
let car={model:'honda',age:5,color:'silver',weight:950,size:'big'};
let flat={location:'center',floor:3,rooms:3,status:'owned',size:'big'};
let book={color:'red',pages:250,title:'vocabulary',status:'main',size:'big'};
// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
let dogs=['boxer','york','corgi','akita','beagle'];
console.log(dogs);
let mans=['Vasya','Petya','Vova','Vanya','Sasha'];
console.log(mans);
let cars=['honda','mazda','ford','seat','toyota']
console.log(cars);
// - створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
let house={
    color:'grey',
    floor:[1,2,3],
    room:{room1:'holl',room2:'bedroom',room3:'kitchen'},
    size:'big',
    square:250
};
console.log(house);

let driver={
    name:'Vasya',
    age:45,
    status:'married',
    wife:{name:'Lena',age:43,job:'nurse'},
    card:['a','b','c','d'],
}
console.log(driver);
let toy={
    type:'puzzle',
    color:['red','yellow','green'],
    size:{wight:20,height:30},
    class:3,
    box:'paper',
}
console.log(toy);
let table={
    color:'grey',
    size:{wight:120,height:200},
    box:[1,2,3],
    corner:4,
    fabric:'tree',
};
console.log(table);
let bag={
    color:'black',
    size:{wight:50,height:25},
    fabric:'leather',
    pocket:[1,2,3],
};
console.log(bag);

// Дан массив:
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
console.log(users[7].status);

// - статус Максима
console.log(users[4].status);
console.log(users[10].status);

// - ім'я передостаннього об'єкту
console.log(users[9].name);

// - ім'я третього об'єкта
console.log(users[2].name);

// - вік Олега
console.log(users[6].age);

// - вік Олі
console.log(users[9].age);

// - вік + ім'я 5го об'єкта
console.log(users[4].age,users[4].name);

// - вік + сатус Анни
console.log(users[5].age,users[5].status);




    
 

  
   
    




