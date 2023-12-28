let listItem = document.querySelectorAll('.list-items');

for(i = 0; i < listItem.length; i++){
    listItem[i].style.fontSize = '3rem';
    console.log(listItem)
}

/*
let ul = document.querySelector('ul');
console.log(ul.childNodes);
ul.childNodes[5].style.backgroundColor = 'blue';
ul.childNodes[5].style.color = 'white';

console.log(ul.children);
console.log(ul.firstChild);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
ul.lastElementChild.style.backgroundColor = 'yellow';
ul.lastElementChild.style.color = 'red';

let li = document.querySelector('li');
console.log(li.innerText);

*/ 

let revelBtn = document.querySelector('.reveal-btn');
let hiddenContent = document.querySelector('.hidden-content');

function revealContent(){
    if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn');
    }
    else{
        hiddenContent.classList.add('reveal-btn');
    }
}
revelBtn.addEventListener('click', revealContent);


// Or

let chengeDispla = document.querySelector('.reveal-btn');
let contain = document.querySelector('.hidden-content');

function mufun(){

    if(contain.classList.contains('boxes')){
        contain.classList.remove('boxes');
    }
    else{
        contain.classList.add('boxes');
    }
}
chengeDispla.addEventListener('click', mufun)