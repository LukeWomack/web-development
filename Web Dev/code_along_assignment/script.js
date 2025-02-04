//Get elements

let output = document.getElementById("output");

// 1. Arrow Function

document.getElementById("arrowElement").addEventListener("click", () =>{
    const greet = name => 'Hello, '+name+'!';
    output.textContent = greet("Luke Womack");
})

// promise example

document.getElementById("promiseButton").
addEventListener("click", () =>{
    function fetchData(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve("Data fetched using Promise!");
            }, 2000);
        });
    }

    fetchData().then(response =>{
        output.textContent = response;
    });
});

// async/await

document.getElementById("asyncButton").
addEventListener("click", async () =>{
    function fetchData(){
        return new Promise((resolve,) => {
            setTimeout(()=>{
                resolve("Data fetched using async/await!");
            }, 2000);
        });
    }
    let response = await fetchData();
    output.textContent = response;
})