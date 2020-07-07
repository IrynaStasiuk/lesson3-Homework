// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
let textContent=document.getElementById('content');
console.log(textContent);
// - отримує текст з блоку з id "rules"
let textRules=document.getElementById('rules');
console.log(textRules);
// - замініть текст параграфа з id 'content' на будь-який інший
textContent.innerText='Цитата из книги Бойцовский клуб (Чак Паланик)';
// - замініть текст параграфа з id 'rules' на будь-який інший
textRules.innerText='Пятое правило бойцовского клуба: бойцы сражаются без обуви и голые по пояс.';
// - змініть кожному елементу колір фону на червоний
textContent.style.backgroundColor='red';
textRules.style.backgroundColor='red';
// - змініть кожному елементу колір тексту на синій
textContent.style.color='blue';
textRules.style.color='blue';
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
let rules=document.getElementById('rules');
console.log(rules.classList);

// - отримати всі елементи з класом fc_rules
let classFc=document.getElementsByClassName('fc_rules');
console.log(classFc);
// - поміняти колір тексту у всіх елементів fc_rules на червоний
for(let elem of classFc){
    elem.style.color='red';
    console.log(elem);
    
}
