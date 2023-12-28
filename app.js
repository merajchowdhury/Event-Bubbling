let parent = document.getElementById('parent');
let form = document.getElementById('form');
let button = document.getElementById('button');

// parent.addEventListener('click', listener,{
//  capture:true,
// });
// form.addEventListener('click',  listener,{
//     capture:true,
// });
// button.addEventListener('click', listener,{
//     capture:true,
// } );

// function listener(event){
    // console.log(event.target abong event.currentTarget ek noi);

    // console.log(event.currentTarget.tagName)
    /*
    etake bola hoi Event bubbling, jeta nich theke upore
    jemon: button theke parent div a jassche;
    */ 
//    console.log(this.tagName);
   /*
   abar currentTarget abong this akoi kaj kore
   */    
// }
// by default eta false thake , kintu capture : true likhle etake bole capturing, ja bubbling er ulta,

parent.addEventListener('click', listener);
form.addEventListener('click', listener,{
    capture:true,
});
button.addEventListener('click', listener);

function listener(){
    console.log(this.tagName);
}