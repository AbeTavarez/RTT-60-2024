document
    .getElementById("myBtn")
    .addEventListener("click", testRequest);

//* Request interceptor
axios.interceptors.request.use(request => {
    request.metadata = request.metadata || {};
    request.metadata.startTime = new Date().getTime();
    return request;
});

//* Response interceptor
axios.interceptors.response.use(
    (response) => {
        response.config.metadata.endTime = new Date().getTime();
        response.durationInMS = response.config.metadata.endTime - response.config.metadata.startTime;
        return response;
    },
    (error) => {
        error.config.metadata.endTime = new Date().getTime();
        error.durationInMS = error.config.metadata.endTime - error.config.metadata.startTime;
        throw error;
});



/**
 * @method POST 
 * @route /todos
 * @description create a new todo
 */
async function testRequest() {
	let inputVal = document.getElementById("myInput").value;
    let requestBody = { data: inputVal, username: "user1" };

    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', 
        requestBody, { 
        headers: { 
            'Content-Type': 'application/json; charset=UTF-8' 
        }
    });

    console.log("Response Time in MS: ", response.durationInMS);
    
    logResponse(response);
}

//* logResponse
async function logResponse(response) {
    console.log(response);
    
    console.log(response.data);
}


/**
 * @method GET 
 * @description Fetch users from the API
 * @param
 */
async function fetchData() {
    const response = await axios('https://jsonplaceholder.typicode.com/users');

    console.log("Response Time in MS: ", response.durationInMS);
    console.log(response.data);
    
}
fetchData()