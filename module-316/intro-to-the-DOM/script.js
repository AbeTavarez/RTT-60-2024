console.log(document.body);

const pTag = document.getElementById("intro")

console.log(pTag)
console.dir(document.body.children[1].innerText);
console.log(document.scripts)


const ul = document.querySelector('ul')

console.log(ul.firstElementChild)
console.log(ul.lastElementChild)

console.log(ul.childNodes[3])

const els = ul.firstElementChild.nextElementSibling.childNodes
console.log(els)

const newAnchor = document.createElement("a")
newAnchor.textContent = "Second Anchor"

console.log(newAnchor)

ul.firstElementChild.nextElementSibling.appendChild(newAnchor)


// query the div with id app
const app = document.querySelector("#app")
console.log(app)

// append a new child div
app.appendChild(document.createElement("div"))

// create a new p element and  set the text content
const p = document.createElement("p")
p.textContent = "Hello"

// append the p element to the div with id app 
app.appendChild(p)
