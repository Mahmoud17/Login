const email = document.querySelector("[type='email']")
const password = document.querySelector("[type='password']")
const warning = document.querySelector(".text-danger")
const btn = document.querySelector("button")

const users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users)

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function searh(user) {
    for (let item of users) {
      if (item.mail == user.mail && item.pass == user.pass) {
        return item.name
      }
    }
}

btn.addEventListener('click', () => {
    const mail = email.value.toLowerCase()
    const pass = password.value
  
    if (!mail || !pass) {
      warning.innerText =  "Please enter all info"
    } else {
      warning.innerText = ''
      if (!validateEmail(mail)) {
        warning.innerText = "Please enter a valid email"
        return
      }
      let user = {
        mail,
        pass
      }
      let res = searh(user)
      console.log(res)
      console.log(user)
      if (res) {
        window.location.href = `./welcome.html?user=${res}`
      } else {
        warning.innerText = "user not found, please sign up"
      }
    }
  
  })
