function scrollDown() {
	window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
}

let button = document.querySelector('.Down')
button.addEventListener('click', scrollDown)


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

const _CHAT_ID = "-1002246667594"
const _TG_TOKEN_BOT = "7243254299:AAF_DIweFLiC4Ae8jpQuq540VWYVbBq0veY"
const _TG_URL = `https://api.telegram.org/bot${_TG_TOKEN_BOT}/sendMessage`

async function sendData(message) {
  try {
    return await fetch(_TG_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: _CHAT_ID,
        text: message,
        parse_mode: "html"
      }),
    })
  } catch (error) {
    return error
  }
}

let Form = document.querySelector("form")
let InpName = document.querySelector(".name")
let InpEmail = document.querySelector(".email")

Form.addEventListener("submit",(event) => {
    event.preventDefault()
    let message = `Заявка з сайту\n\nName: ${InpName.value}\nEmail: ${InpEmail.value}`
    sendData(message).then(() =>{  
      alert("hello")
    })
   event.target.reset();

} )

