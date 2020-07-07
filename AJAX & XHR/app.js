const dataButton = document.getElementById('button');

//add an event listener
dataButton.addEventListener('click', fetchData);

//function to fetch data
function fetchData(e){

    //create an xhr Object
    const xhr = new XMLHttpRequest();

    //make a GET request to read the data.txt file
    xhr.open('GET', 'data.txt', true);


    xhr.onload = function(){
        //check if the status code is ok
        if(this.status === 200){
            //display the data from the file to the browser
            const output = document.getElementById('output');
            output.innerHTML = `<h1> ${this.responseText}</h1>`
        }
    }

    //send the data through
    xhr.send();

    e.preventDefault();
}