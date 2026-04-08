const btn = document.querySelectorAll('.btn');
const btnClose = document.querySelector('.btnClose');
let form = document.querySelector('.block_form');
const page = document.querySelector('#order_block');
const shop = document.querySelector('#shop');
const massegee = document.querySelector('.header_title1');
console.log(btn[0]);
btn.forEach(element => {
    element.addEventListener("click", function () {
    form.classList.remove('form_hidden');
});

});
btnClose.addEventListener("click", function () {
form.classList.add('form_hidden');

});
const scrollDown = document.querySelector('#order');
scrollDown.onclick = e => getScrollUp(e);

const getScrollUp = (event) => {
    event.preventDefault();
   return page.scrollIntoView({behavior:"smooth"});

   
}
shop.addEventListener('click', function (event) {

   let massege = massegee.textContent;
     massegee.textContent = "ця сторінка в процесі обробки";
     setTimeout(() => {
         massegee.textContent = massege;
        
     },2500);
})