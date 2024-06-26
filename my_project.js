let burgerBtn = document.querySelector(".burger")
let menuNav = document.querySelector(".menu_nav")

burgerBtn.addEventListener("click", () => {
	burgerBtn.classList.toggle("active")
	menuNav.classList.toggle("active")
}) 


function scrollDownCtn() {
	window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
}

let buttonCtn = document.querySelector('.cont')
buttonCtn.addEventListener('click', scrollDown)
