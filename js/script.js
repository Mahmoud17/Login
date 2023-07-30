const username = document.querySelector("[type='text']")
const email = document.querySelector("[type='email']")
const password = document.querySelector("[type='password']")
const btn = document.querySelector("button")
const warning = document.querySelector(".text-danger")

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
    if (item.name == user.name) {
      warning.innerText = "This username is taken"
      return true
    }
    if (item.mail == user.mail) {
      warning.innerText = "This email is taken"
      return true
    }
  }
} 

function clear() {
  username.value = ""
      email.value = ""
      password.value = ""
}

function updateUsers(user) {
  users.push(user)
  localStorage.setItem("users", JSON.stringify(users))
}

btn.addEventListener('click', () => {

  const name = username.value.toLowerCase()
  const mail = email.value.toLowerCase()
  const pass = password.value

  if (!name || !mail || !pass) {
    warning.innerText =  "Please enter all info"
  } else {
    warning.innerText = ''
    if (!validateEmail(mail)) {
      warning.innerText = "Please enter a valid email"
      return
    }
    let user = {
      name,
      mail,
      pass
    }
    if (searh(user)) {
      return
    } else {
      updateUsers(user)
      clear()
      console.log(users)
    }
  }

})