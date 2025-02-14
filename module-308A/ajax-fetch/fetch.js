// fetch with await
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);

    // json() parses the body data
    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error(error);
  }
}
fetchData();

// fetch with then method
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    console.log(res);
    return res;
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));



// =========== DOG API =====================
const dog = document.getElementById('dog');
dog.addEventListener("click", getNewDog);

async function getNewDog() {
    dog.style.cursor = 'wait';
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json();
    const url = jsonData.message;

    dog.src = url;
    dog.style.cursor = 'pointer';
}

getNewDog();




// ======== POST ===============
document
    .getElementById("myBtn")
    .addEventListener("click", testRequest);

async function testRequest() {
	let inputVal = document.getElementById("myInput").value;
    let requestBody = { data: inputVal };

    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    });

    alertResponse(response);
}

async function alertResponse(response) {
    console.log(response);
    
    if (response.ok) {
        // === returns the data as text
        // const textData = await response.text();
        // alert(textData);

        // === returns a JS object
        const jsonData = await response.json();
        console.log(jsonData);
        
    } else {
        alert("The request returned a status other than 200 OK: " + response.status);
    }
}
