let header = document.querySelector(".header")
header.style = "background-color:orangered; color:white; text-align:center; padding:1rem"

let title = document.getElementById("title")
title.textContent = "Javascript Dom Assignment 1"

let navItem = document.querySelector(".nav-item")
navItem.style = "list-style-type:none; display:flex; justify-content:center; gap:1rem"

let username = document.querySelector("#username")
username.value = "Furkan"
username.disabled = true

let password = document.querySelector("#password")
password.value = "123456"
password.type = "text"
password.disabled = true

let btn = document.querySelector(".btn")
btn.style = "background-color:#C0EFC0; color:#3E003E; padding:0.6rem 1rem; border-radius:0.5rem; border:none; cursor:pointer"
btn.textContent = "Giriş Yap"

let projects = document.getElementById("projects")
let h3 = projects.firstElementChild
h3.textContent = "Js Dom Projects"

let ul = projects.lastElementChild
ul.innerHTML = "<li>Hello World!</li> <li>Guess Number</li> <li>Checkout Page</li> <li>Gelir-Gider Projesi</li> <li>Api Projects</li>"