
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
let textId=document.getElementById('main_header');

let red=Math.random()*255;
let green=Math.random()*255;
let blue=Math.random()*255;
textId.style.color=`rgb(${red},${green},${blue})`;
console.log(textId);

// -- робить шириниу елементу ul 400 пікселів
let ulElements=document.getElementsByTagName('ul');

ulElements[0].style.width='400px';
console.log(ulElements);
// -- робить шириниу всіх елементів з класом linkList шириною 50%
let links=document.getElementsByClassName('linkList');
for(i=0;i<links.length;i++){
    links[i].style.width='50%';
}
console.log(links);
// -- отримує текст який зберігається в елементі з класом listElement2
let element2=document.getElementsByClassName('listElement2');
console.log(element2[0].innerText);
// -- отримує всі елементи li та змінює ім колір фону на сірий
let lists=document.getElementsByTagName('li');
for(let list of lists){
    list.style.backgroundColor='grey';
}
// -- отримує всі елементи 'a' та додає їм клас anchor
let aElements=document.getElementsByTagName('a');
for(let a of aElements){
    a.classList.add('anchor');
}
console.log(aElements);
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for(let a of aElements){
    if(a.text==='link3'){
        a.style.fontSize='40px'
    };
}

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for(let a of aElements){
    // let xxx=a.textContent
    a.classList.add(`element_${a.textContent}`)
}
console.log(aElements);

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subs=document.getElementsByClassName('sub-header');
// let back=prompt('enter color')
// for(let sub of subs){
//     sub.style.backgroundColor=back
// }
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// for(let sub of subs){
//     if(sub.textContent==='content 2 segment'){
//         sub.style.color=back;
//     }
// }
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let cont1=document.getElementsByClassName('content_1')
// let someText=prompt('enter your text');
// cont1[0].innerText=someText
// -- отримати елементи p та змінити їм paddin на довільне значення
let pars=document.getElementsByTagName('p');
for(let par of pars){
    par.style.padding='10px';
}

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
let lastText=document.getElementsByClassName('text2');
lastText[0].innerText='next content';

