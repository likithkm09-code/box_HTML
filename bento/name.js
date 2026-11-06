let head =document.getElementById('head')
let btn=document.getElementById('btn')
console.log(btn);
console.log(head);
btn.addEventListener("click",change);
function change() {
   if (head.textContent == 'likith'){
    head.textContent='madhu';
   }
   else{
    head.textContent='likith'
   }
}