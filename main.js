let header = document.querySelector('.page-header');
let buttons_div = document.querySelector('.page-buttons');
let page_logo = document.querySelector('.page-logo');
let buttons = document.querySelectorAll('.button');
const observer_header = new IntersectionObserver((e)=>{
    e.forEach((element)=>{
        if(element.isIntersecting){
            page_logo.style.display = "none"
            buttons_div.classList.remove("page-buttons-logo")
            buttons.forEach(e=>{
                e.classList.remove('button-with-logo');
            })
        }
        else{
            page_logo.style.display = "block"
            buttons_div.classList.add("page-buttons-logo");
            buttons.forEach(e=>{
                e.classList.add('button-with-logo');
            })
        }
    })
})
observer_header.observe(header);